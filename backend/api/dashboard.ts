import axios from 'axios';

export const getDashboardData = async () => {
  const response = await axios.get('/api/dashboard');
  return response.data;
};
