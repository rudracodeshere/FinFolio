import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api/portfolio';
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { headers: { 'x-auth-token': token } };
  } else {
    return {};
  }
};


const getHoldings = () => {
  return axios.get(API_URL, getAuthHeader());
};

// Add a new holding
const addHolding = (ticker, moneySpent) => {
  return axios.post(API_URL, { ticker, moneySpent }, getAuthHeader());
};
const deleteHolding = (id) => {
  return axios.delete(`${API_URL}/${id}`, getAuthHeader());
};


const updateHolding = (id, holdingData) => {
  return axios.put(`${API_URL}/${id}`, holdingData, getAuthHeader());
};
const portfolioService = {
  getHoldings,
  addHolding,
  deleteHolding,
  updateHolding,
};

export default portfolioService;
