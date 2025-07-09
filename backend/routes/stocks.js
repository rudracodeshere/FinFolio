const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const axios = require('axios');
router.post('/watchlist', auth, async (req, res) => {
  const { ticker } = req.body;

  if (!ticker) {
    return res.status(400).json({ msg: 'Ticker symbol is required' });
  }

  try {
    const user = await User.findById(req.user.id);
    const stockTicker = ticker.toUpperCase();

    if (user.watchlist.includes(stockTicker)) {
      return res.status(400).json({ msg: 'Stock already in watchlist' });
    }

    user.watchlist.push(stockTicker);
    await user.save();

    res.json(user.watchlist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/watchlist', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('watchlist');
    res.json(user.watchlist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/quote/:ticker', auth, async (req, res) => {
  const ticker = req.params.ticker.toUpperCase();
  const apiKey = "N4B35E5NZ8TIVNIE";
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const quoteData = response.data['Global Quote'];


    if (!quoteData || Object.keys(quoteData).length === 0) {
      if (response.data.Note) {
        return res.status(429).json({ msg: 'API rate limit exceeded. Please try again later.' });
      }
      return res.status(404).json({ msg: 'Stock data not found for this ticker.' });
    }
    const simplifiedData = {
      symbol: quoteData['01. symbol'],
      price: quoteData['05. price'],
      change: quoteData['09. change'],
      changePercent: quoteData['10. change percent'],
    };

    res.json(simplifiedData);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error while fetching from Alpha Vantage');
  }
});


// @route   GET api/stocks/history/:ticker
// @desc    Get daily historical stock data from Alpha Vantage
// @access  Private
router.get('/history/:ticker', auth, async (req, res) => {
  const ticker = req.params.ticker.toUpperCase();
  const apiKey = "N4B35E5NZ8TIVNIE";

  // THE FIX IS HERE: Using the more reliable TIME_SERIES_DAILY function
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    // The response key for this function is 'Time Series (Daily)'
    const timeSeries = response.data['Time Series (Daily)'];

    if (!timeSeries) {
      // Add a more detailed error log for ourselves on the backend
      console.error("Alpha Vantage History Response Problem:", response.data);
      return res.status(404).json({ msg: 'Historical data not found for this ticker. The API may have returned an error or note.' });
    }

    // Convert the API response into a format that Chart.js understands
    const labels = Object.keys(timeSeries);
    // The closing price is in '4. close' for this endpoint as well
    const data = labels.map(label => parseFloat(timeSeries[label]['4. close']));

    // The data comes in reverse chronological order, so we reverse it
    res.json({
      labels: labels.reverse(),
      data: data.reverse()
    });

  } catch (err) {
    console.error('Alpha Vantage History Error:', err.message);
    res.status(500).send('Server Error fetching historical data');
  }
});
// @route   DELETE api/stocks/watchlist/:ticker
// @desc    Remove a stock from user's watchlist
// @access  Private
router.delete('/watchlist/:ticker', auth, async (req, res) => {
  try {
    const tickerToRemove = req.params.ticker.toUpperCase();

    // Find the user and pull the ticker from their watchlist array
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $pull: { watchlist: tickerToRemove } },
      { new: true } // Return the updated user document
    );

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Send back the new, updated watchlist
    res.json(user.watchlist);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
