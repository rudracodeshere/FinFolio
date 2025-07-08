import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import stockService from '../services/stockService';
import aiService from '../services/aiService';
import StockCard from '../components/StockCard';
import styles from './Dashboard.module.css'; // Import the Dashboard styles

const Dashboard = () => {
  const { token, logoutUser } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);
  const [ticker, setTicker] = useState('');
  const [watchlistError, setWatchlistError] = useState('');
  const [loadingWatchlist, setLoadingWatchlist] = useState(true);

  const [aiTicker, setAiTicker] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        if (token) {
          const res = await stockService.getWatchlist(token);
          setWatchlist(res.data);
        }
      } catch (err) {
        if (err.response && err.response.status === 401) logoutUser();
      } finally {
        setLoadingWatchlist(false);
      }
    };
    fetchWatchlist();
  }, [token, logoutUser]);

  const onWatchlistChange = e => {
    setTicker(e.target.value.toUpperCase());
    setWatchlistError('');
  };

  const onWatchlistSubmit = async e => {
    e.preventDefault();
    setWatchlistError('');
    try {
      const res = await stockService.addStock(ticker, token);
      setWatchlist(res.data);
      setTicker('');
    } catch (err) {
      setWatchlistError(err.response.data.msg || 'Error adding stock');
    }
  };

  const onAiSubmit = async (e) => {
    e.preventDefault();
    setAiLoading(true);
    setAiError('');
    setAnalysis('');
    try {
      const res = await aiService.getAnalysis(aiTicker);
      setAnalysis(res.data.analysis);
    } catch (err) {
      setAiError('Failed to get analysis. Please try again.');
    } finally {
      setAiLoading(false);
    }
  }
  const handleRemoveStock = async (tickerToRemove) => {
    try {
      // Call the service to remove the stock from the database
      await stockService.removeStock(tickerToRemove, token);
      // Update the local state to remove the card from the screen instantly
      setWatchlist(currentWatchlist => currentWatchlist.filter(ticker => ticker !== tickerToRemove));
    } catch (err) {
      // If something goes wrong, show an alert
      alert('Failed to remove stock from watchlist.');
      console.error(err);
    }
  };
  return (
    <div className={styles.container}>

      <div className={styles.card}>
        <h2 className={styles.title}>AI Financial Analyst</h2>
        <p className={styles.subtitle}>Get instant insights on any stock with our AI.</p>
        <form onSubmit={onAiSubmit} className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter Stock Ticker (e.g., TSLA)"
            value={aiTicker}
            onChange={(e) => setAiTicker(e.target.value.toUpperCase())}
            required
          />
          <button type="submit" disabled={aiLoading} className={`${styles.button} ${styles.blueButton}`}>
            {aiLoading ? 'Analyzing...' : 'Analyze'}
          </button>
        </form>
        {aiError && <p className={styles.error}>{aiError}</p>}
        {analysis && <div className={styles.analysisBox}>{analysis}</div>}
      </div>

      <div className={styles.card}>
        <h2 className={styles.title}>My Watchlist</h2>
        <form onSubmit={onWatchlistSubmit} className={styles.form} style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            name="ticker"
            className={styles.input}
            placeholder="Add to Watchlist (e.g., AAPL)"
            value={ticker}
            onChange={onWatchlistChange}
            required
          />
          <button type="submit" className={`${styles.button} ${styles.greenButton}`}>Add Stock</button>
        </form>
        {watchlistError && <p className={styles.error}>{watchlistError}</p>}

        {loadingWatchlist ? (
          <p>Loading Watchlist...</p>
        ) : watchlist.length > 0 ? (
          <div className={styles.watchlistGrid}>
            {watchlist.map(ticker => (
              <div key={ticker} className={styles.watchlistItem}>
                <StockCard ticker={ticker} onRemove={handleRemoveStock} />
              </div>
            ))}
          </div>
        ) : (
          <p>Your watchlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
