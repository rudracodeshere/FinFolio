import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { AuthContext } from '../context/AuthContext';
import stockService from '../services/stockService';
import styles from './Portfolio.module.css';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend
);

const ChartPage = () => {
  const { ticker } = useParams();
  const { token } = useContext(AuthContext);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await stockService.getHistory(ticker, token);

        // This function creates the beautiful gradient fill.
        const createGradient = (ctx, area) => {
          const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
          gradient.addColorStop(0, 'rgba(37, 99, 235, 0)');
          gradient.addColorStop(1, 'rgba(37, 99, 235, 0.3)');
          return gradient;
        };

        setChartData({
          labels: res.data.labels,
          datasets: [
            {
              label: ticker,
              data: res.data.data,
              borderColor: '#2563eb',
              // NEW: Use a function for the background color to create the gradient
              backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                if (!chartArea) { return null; } // Return nothing if the chart area is not ready
                return createGradient(ctx, chartArea);
              },
              fill: true,
              tension: 0.4, // Smoother curve
              pointRadius: 2, // Show small dots
              pointHoverRadius: 6, // Make dots bigger on hover
              pointBackgroundColor: '#2563eb',
            },
          ],
        });
      } catch (err) {
        setError('Could not fetch historical data.');
      } finally {
        setLoading(false);
      }
    };

    if (ticker && token) {
      fetchHistory();
    }
  }, [ticker, token]);

  // NEW: A much more detailed options object for an interactive chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index', // Show tooltip for the nearest point on the x-axis
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        // Customize the tooltip
        callbacks: {
          title: (context) => `Date: ${context[0].label}`,
          label: (context) => `Price: $${context.raw.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        display: true, // Show the x-axis labels
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10, // Show a maximum of 10 dates to avoid clutter
        },
        grid: {
          display: false, // Keep the grid clean
        },
      },
      y: {
        display: true,
        ticks: {
          callback: (value) => `$${value.toFixed(0)}`, // Format y-axis as integer dollars
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h1 className={styles.title}>{ticker} Price History (100 Days)</h1>
          <Link to="/dashboard" className={`${styles.actionButton} ${styles.edit}`}>← Back to Dashboard</Link>
        </div>
        <div style={{ position: 'relative', height: '60vh' }}>
          {loading && <p>Loading Chart...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {chartData && <Line options={options} data={chartData} />}
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
