import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import stockService from '../services/stockService';
import styles from './StockCard.module.css';
import { Link } from 'react-router-dom';

const StockCard = ({ ticker, onRemove }) => {
  const { token } = useContext(AuthContext);
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await stockService.getQuote(ticker, token);
        setStockData(res.data);
      } catch (err) {
        setError('Could not fetch data');
        console.error(`Error fetching quote for ${ticker}:`, err);
      } finally {
        setLoading(false);
      }
    };

    if (ticker && token) {
      fetchQuote();
    }
  }, [ticker, token]);

  if (loading) {
    return <div className={styles.loading}>Loading {ticker}...</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p className={styles.symbol}>{ticker}</p>
        <p>{error}</p>
      </div>
    );
  }

  const isPositive = stockData && parseFloat(stockData.change) >= 0;

  return (
    <div className={styles.card}>
      <button
        className={styles.removeButton}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRemove(ticker);
        }}
      >
        ×
      </button>
      <h3 className={styles.symbol}>
        <Link to={`/chart/${stockData.symbol}`}>{stockData.symbol}</Link>
      </h3>
      <p className={styles.price}>${parseFloat(stockData.price).toFixed(2)}</p>
      <p className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
        {isPositive ? '▲' : '▼'} {isPositive ? '+' : ''}{parseFloat(stockData.change).toFixed(2)} ({parseFloat(stockData.changePercent).toFixed(2)}%)
      </p>
    </div>
  );
};

export default StockCard;
