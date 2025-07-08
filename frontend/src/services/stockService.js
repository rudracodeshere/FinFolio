import axios from 'axios';

const API_URL = '/api/stocks';

const getAuthHeader = (token) => {
  return {
    headers: {
      'x-auth-token': token
    }
  };
};

const getWatchlist = (token) => {
  return axios.get(API_URL + '/watchlist', getAuthHeader(token));
};

const addStock = (ticker, token) => {
  return axios.post(API_URL + '/watchlist', { ticker }, getAuthHeader(token));
};
const getQuote = (ticker, token) => {
  return axios.get(`${API_URL}/quote/${ticker}`, getAuthHeader(token));
};
const getHistory = (ticker, token) => {
  return axios.get(`${API_URL}/history/${ticker}`, getAuthHeader(token));
};
// Remove stock from watchlist
const removeStock = (ticker, token) => {
  return axios.delete(`${API_URL}/watchlist/${ticker}`, getAuthHeader(token));
};
const stockService = {
  getWatchlist,
  addStock,
  getQuote,
  getHistory,
  removeStock,
};

export default stockService;
