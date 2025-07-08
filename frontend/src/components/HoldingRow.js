import React, { useState } from 'react';
import portfolioService from '../services/portfolioService';
import styles from '../pages/Portfolio.module.css';
import { Link } from 'react-router-dom';

const HoldingRow = ({ data, onDataChange }) => {
  const { _id, ticker, quantity, quote, marketValue, totalCost, purchasePrice, error } = data;

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ quantity: quantity, purchasePrice: purchasePrice });

  const handleSave = async () => {
    try {
      await portfolioService.updateHolding(_id, {
        quantity: Number(editData.quantity),
        purchasePrice: Number(editData.purchasePrice)
      });
      setIsEditing(false);
      onDataChange();
    } catch (err) {
      alert("Error: Could not save changes.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Delete ${ticker} holding?`)) {
      try {
        await portfolioService.deleteHolding(_id);
        onDataChange();
      } catch (err) {
        alert("Error: Could not delete holding.");
      }
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({ quantity: quantity, purchasePrice: purchasePrice });
  };

  const onChange = (e) => setEditData({ ...editData, [e.target.name]: e.target.value });

  if (error) {
    return (
      <tr>
        <td className={styles.td}>{ticker}</td>
        <td colSpan="4" className={styles.td} style={{ color: 'red' }}>{error}</td>
        <td className={styles.td}>
          <button onClick={handleDelete} className={`${styles.actionButton} ${styles.delete}`}>Delete</button>
        </td>
      </tr>
    );
  }

  const totalPL = marketValue - totalCost;
  const isPositive = totalPL >= 0;

  return (
    <tr>
      {/* Ticker */}
      <td className={styles.td}>
        <Link to={`/chart/${ticker}`} style={{ fontWeight: 700, color: '#1d4ed8', textDecoration: 'none' }}>
          {ticker}
        </Link>
      </td>

      {/* Quantity */}
      <td className={styles.td}>
        {isEditing ?
          <input type="number" name="quantity" value={editData.quantity} onChange={onChange} className={styles.input} style={{ width: '80px' }} />
          : quantity.toFixed(4)
        }
      </td>

      {/* Money Spent (Total Cost) */}
      <td className={styles.td}>
        {isEditing ?
          <input type="number" name="purchasePrice" value={editData.purchasePrice} onChange={onChange} className={styles.input} style={{ width: '80px' }} placeholder="Avg. Cost" />
          : `$${totalCost.toFixed(2)}`
        }
      </td>

      {/* Current Value (Market Value) */}
      <td className={styles.td}>{quote ? `$${marketValue.toFixed(2)}` : 'N/A'}</td>

      {/* P/L (Profit/Loss) */}
      <td className={styles.td} style={{ color: isPositive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
        {quote ? `${isPositive ? '+' : ''}$${totalPL.toFixed(2)}` : 'N/A'}
      </td>

      {/* Actions */}
      <td className={styles.td}>
        {isEditing ? (
          <>
            <button onClick={handleSave} className={`${styles.actionButton} ${styles.save}`}>Save</button>
            <button onClick={handleCancel} className={`${styles.actionButton} ${styles.cancel}`}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className={`${styles.actionButton} ${styles.edit}`}>Edit</button>
            <button onClick={handleDelete} className={`${styles.actionButton} ${styles.delete}`}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default HoldingRow;
