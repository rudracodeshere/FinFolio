const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Holding = require('../models/Holding');
const axios = require('axios');

// @route   POST api/portfolio
// @desc    Add a new holding by specifying money spent
// @access  Private
router.post('/', auth, async (req, res) => {
  const { ticker, moneySpent } = req.body;

  if (!ticker || !moneySpent) {
    return res.status(400).json({ msg: 'Ticker and money spent are required' });
  }

  try {
    // 1. Check if user already has a holding for this ticker
    let existingHolding = await Holding.findOne({ user: req.user.id, ticker: ticker.toUpperCase() });
    if (existingHolding) {
      return res.status(400).json({ msg: 'You already own this stock. Please edit the existing holding.' });
    }

    // 2. Fetch the current stock price from Alpha Vantage
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`;
    const alphaVantageRes = await axios.get(url);
    const quoteData = alphaVantageRes.data['Global Quote'];

    if (!quoteData || !quoteData['05. price']) {
      return res.status(404).json({ msg: 'Could not fetch current price for this ticker. Please try again.' });
    }

    const currentPrice = parseFloat(quoteData['05. price']);
    if (currentPrice <= 0) {
      return res.status(400).json({ msg: 'Invalid stock price received.' });
    }

    // 3. Calculate the quantity of shares
    const quantity = moneySpent / currentPrice;

    // 4. Create and save the new holding
    const newHolding = new Holding({
      user: req.user.id,
      ticker: ticker.toUpperCase(),
      quantity: quantity,
      purchasePrice: currentPrice, // We use the current price as the purchase price
    });

    const savedHolding = await newHolding.save();
    res.json(savedHolding);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const holdings = await Holding.find({ user: req.user.id }).sort({ ticker: 'asc' });
    res.json(holdings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const holding = await Holding.findById(req.params.id);

    if (!holding) {
      return res.status(404).json({ msg: 'Holding not found' });
    }

    if (holding.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await holding.deleteOne();

    res.json({ msg: 'Holding removed' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Holding not found' });
    }
    res.status(500).send('Server Error');
  }
});



router.put('/:id', auth, async (req, res) => {
  const { quantity, purchasePrice } = req.body;

  try {
    let holding = await Holding.findById(req.params.id);

    if (!holding) {
      return res.status(404).json({ msg: 'Holding not found' });
    }

    if (holding.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }


    if (quantity !== undefined) holding.quantity = quantity;
    if (purchasePrice !== undefined) holding.purchasePrice = purchasePrice;

    await holding.save();
    res.json(holding);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
