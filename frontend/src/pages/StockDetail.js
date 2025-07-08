import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AuthContext } from '../context/AuthContext';
import stockService from '../services/stockService';

const StockDetail = () => {
  const { ticker } = useParams();
  const { token } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      if (token && ticker) {
        try {
          const res = await stockService.getHistory(ticker, token);
          setHistory(res.data);
        } catch (err) {
          setError(err.response?.data?.msg || `Could not fetch data for ${ticker}.`);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchHistory();
  }, [ticker, token]);

  if (loading) return <div>Loading chart for {ticker}...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div>
      <h1>{ticker.toUpperCase()} - Last 100 Days</h1>
      <Link to="/dashboard">← Back to Dashboard</Link>

      <div style={{ width: '100%', height: 400, marginTop: '20px' }}>
        <ResponsiveContainer>
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['dataMin', 'dataMax']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockDetail;
