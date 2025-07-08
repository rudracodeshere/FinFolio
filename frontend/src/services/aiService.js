import axios from 'axios';

const API_URL = (process.env.REACT_APP_API_URL || 'http://localhost:5001') + '/api/ai';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { headers: { 'x-auth-token': token } } : {};
};

const getAnalysis = (ticker) => {
  return axios.post(`${API_URL}/analyze`, { ticker }, getAuthHeader());
};
// Get AI rebalancing suggestion
const getRebalancingSuggestion = (portfolioData) => {
  // We send the data in a { portfolio: ... } object to match the backend
  return axios.post(`${API_URL}/rebalance`, { portfolio: portfolioData }, getAuthHeader());
};
const aiService = {
  getAnalysis,
  getRebalancingSuggestion,
};

export default aiService;
