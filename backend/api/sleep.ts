import axios from 'axios';

// Configure axios with the base URL
const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAverageSleepDuration = async () => {
  const response = await axios.get('/sleeppeople/average-sleep-duration');
  console.log(response.data);
  return response.data.averageSleepDuration;
};

export const getSleepPR = async (duration: number) => {
  const response = await axios.get('/sleeppeople/sleep-pr', { params: { duration } });
  return response.data;
};
