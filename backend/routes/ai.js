const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { GoogleGenerativeAI } = require('@google/generative-ai');


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


router.post('/analyze', auth, async (req, res) => {
  const { ticker } = req.body;

  if (!ticker) {
    return res.status(400).json({ msg: 'Ticker is required' });
  }

  const prompt = `Provide a brief financial analysis for the company with the stock ticker "${ticker.toUpperCase()}". Cover these three points in a professional but easy-to-understand tone:
  1.  **Core Business Model:** What does the company do and how does it make money?
  2.  **Potential Strengths:** What are two key strengths or competitive advantages?
  3.  **Potential Risks:** What are two key risks investors should be aware of?

  Keep the entire response under 150 words.`;

  try {

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysis = response.text();

    res.json({ analysis });

  } catch (err) {
    console.error('Gemini API Error:', err);
    res.status(500).json({ msg: 'Failed to get AI analysis. Please check server logs.' });
  }
});
// @route   POST api/ai/rebalance
// @desc    Get AI rebalancing suggestion for a portfolio
// @access  Private
router.post('/rebalance', auth, async (req, res) => {
  const { portfolio } = req.body;

  if (!portfolio || portfolio.length === 0) {
    return res.status(400).json({ msg: 'Portfolio data is required.' });
  }

  // Format the portfolio data into a string for the AI prompt
  const portfolioSummary = portfolio.map(h =>
    `- ${h.ticker}: Current Value $${h.marketValue.toFixed(2)}, Total P/L $${(h.marketValue - h.totalCost).toFixed(2)}`
  ).join('\n');

  const totalPortfolioValue = portfolio.reduce((acc, h) => acc + h.marketValue, 0);

  const prompt = `
    You are a helpful AI financial assistant providing educational insights.
    A user has provided their stock portfolio. Analyze its composition and provide a brief rebalancing suggestion.

    Here is the user's portfolio data:
    ${portfolioSummary}

    The total portfolio value is $${totalPortfolioValue.toFixed(2)}.

    Based on this data, please perform the following analysis:
    1.  Identify the single most "overweight" holding (the stock that makes up the largest percentage of the total portfolio value). State its percentage.
    2.  Identify one or two "underweight" holdings (stocks with a much smaller percentage).
    3.  Provide a brief, one-sentence suggestion. For example, "You might consider trimming some profits from the overweight position to re-invest in underweight holdings to maintain balance."
    4.  Conclude with the disclaimer: "This is an AI-generated suggestion and not financial advice."

    Keep the entire response concise and under 150 words.
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const suggestion = response.text();

    res.json({ suggestion });

  } catch (err) {
    console.error('Gemini API Error:', err);
    res.status(500).json({ msg: 'Failed to get AI analysis. Please check server logs.' });
  }
});
module.exports = router;
