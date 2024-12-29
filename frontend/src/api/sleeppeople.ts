import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAverageSleepDuration = async (): Promise<number> => {
  const response = await api.get('/sleeppeople/average-sleep-duration');
  return response.data;
};

export const getAverageSleepDurationByOccupation = async (occupation: string): Promise<number> => {
  const response = await api.get('/sleeppeople/average-sleep-duration-by-occupation', {
    params: { occupation },
  });
  return response.data;
};