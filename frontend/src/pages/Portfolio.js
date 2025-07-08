import React, { useState, useEffect, useCallback, useContext } from 'react';
import portfolioService from '../services/portfolioService';
import stockService from '../services/stockService';
import aiService from '../services/aiService'; // Import the AI service
import { AuthContext } from '../context/AuthContext';
import HoldingRow from '../components/HoldingRow';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const { token, logoutUser } = useContext(AuthContext);
  const [portfolioData, setPortfolioData] = useState([]);
  const [summary, setSummary] = useState({ totalValue: 0, totalCost: 0, totalPL: 0 });
  const [formData, setFormData] = useState({ ticker: '', moneySpent: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const [suggestion, setSuggestion] = useState('');
  const [suggestionLoading, setSuggestionLoading] = useState(false);

  const fetchPortfolioData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const holdingsRes = await portfolioService.getHoldings();
      const fetchedHoldings = holdingsRes.data;
      const quotePromises = fetchedHoldings.map(h => stockService.getQuote(h.ticker, token));
      const quoteResults = await Promise.allSettled(quotePromises);

      let totalValue = 0;
      let totalCost = 0;

      const combinedData = fetchedHoldings.map((holding, index) => {
        const quoteResult = quoteResults[index];
        const holdingCost = holding.quantity * holding.purchasePrice;
        totalCost += holdingCost;
        if (quoteResult.status === 'fulfilled') {
          const quote = quoteResult.value.data;
          const marketValue = holding.quantity * quote.price;
          totalValue += marketValue;
          return { ...holding, quote, marketValue, totalCost: holdingCost };
        } else {
          return { ...holding, quote: null, marketValue: 0, totalCost: holdingCost, error: 'Failed to load quote' };
        }
      });
      setPortfolioData(combinedData);
      setSummary({ totalValue, totalCost, totalPL: totalValue - totalCost });
    } catch (err) {
      if (err.response && err.response.status === 401) logoutUser();
    } finally {
      setLoading(false);
    }
  }, [token, logoutUser]);

  useEffect(() => { fetchPortfolioData(); }, [fetchPortfolioData]);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await portfolioService.addHolding(formData.ticker, formData.moneySpent);
      setFormData({ ticker: '', moneySpent: '' });
      await fetchPortfolioData();
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to add holding');
    } finally {
      setIsSubmitting(false);
    }
  };

  // New handler function for getting the AI suggestion
  const handleGetSuggestion = async () => {
    setSuggestionLoading(true);
    setSuggestion(''); // Clear old suggestions
    try {
      const res = await aiService.getRebalancingSuggestion(portfolioData);
      setSuggestion(res.data.suggestion);
    } catch (err) {
      alert('Could not get AI suggestion. Please try again later.');
    } finally {
      setSuggestionLoading(false);
    }
  };

  const isPositive = summary.totalPL >= 0;

  if (loading) return <div>Loading Portfolio...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio Overview</h1>
      <div className={styles.card}>
        <div className={styles.summaryContainer}>
          <div className={styles.summaryItem}>Total Market Value <strong style={{ color: '#1d4ed8' }}>${summary.totalValue.toFixed(2)}</strong></div>
          <div className={styles.summaryItem}>Total Cost <strong>${summary.totalCost.toFixed(2)}</strong></div>
          <div className={styles.summaryItem}>Total P/L <strong style={{ color: isPositive ? '#16a34a' : '#dc2626' }}>{isPositive ? '+' : ''}${summary.totalPL.toFixed(2)}</strong></div>
        </div>
      </div>
      <div className={styles.card}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Add New Holding</h2>
        <form onSubmit={onSubmit}>
          <input
            className={styles.input}
            type="text"
            name="ticker"
            value={formData.ticker}
            onChange={onChange}
            placeholder="Stock Ticker (e.g., AAPL)"
            required
            disabled={isSubmitting}
          />
          <input
            className={styles.input}
            type="number"
            name="moneySpent"
            value={formData.moneySpent}
            onChange={onChange}
            placeholder="Money to Invest ($)"
            required
            min="1"
            disabled={isSubmitting}
          />
          <button type="submit" className={`${styles.actionButton} ${styles.save}`} disabled={isSubmitting}>
            {isSubmitting ? 'Investing...' : 'Invest'}
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      </div>

      {/* AI Rebalancing Suggestion Card */}
      <div className={styles.card}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>AI Rebalancing Suggestion</h2>
        <button
          onClick={handleGetSuggestion}
          className={`${styles.actionButton} ${styles.edit}`}
          disabled={suggestionLoading || portfolioData.length === 0}
        >
          {suggestionLoading ? 'Analyzing Portfolio...' : 'Get AI Suggestion'}
        </button>
        {suggestion && (
          <pre style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.5rem',
            border: '1px solid #e2e8f0',
            whiteSpace: 'pre-wrap',
            fontFamily: 'sans-serif',
            fontSize: '0.9rem',
            lineHeight: '1.6'
          }}>
            {suggestion}
          </pre>
        )}
      </div>

      <div className={`${styles.card} ${styles.tableContainer}`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Ticker</th>
              <th className={styles.th}>Quantity</th>
              <th className={styles.th}>Money Spent</th>
              <th className={styles.th}>Current Value</th>
              <th className={styles.th}>P/L</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.length > 0 ? (
              portfolioData.map(data => <HoldingRow key={data._id} data={data} onDataChange={fetchPortfolioData} />)
            ) : (
              <tr><td colSpan="6" className={styles.td}>You have no holdings yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
