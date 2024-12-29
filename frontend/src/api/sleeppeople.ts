import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createRecord = async (data: any): Promise<void> => {
  await api.post('/sleeppeople', data);
}

export const updateRecord = async (personId: number, data: any): Promise<void> => {
  await api.patch(`/sleeppeople/${personId}`, data);
}

export const deleteRecord = async (personId: number): Promise<void> => {
  await api.delete(`/sleeppeople/${personId}`);
}

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

export const getSleepPR = async (duration: number): Promise<number> => {
  const response = await api.get('/sleeppeople/sleep-pr', {
    params: { duration },
  });
  return response.data;
};

export const findOne = async (id: number): Promise<any> => {
  const response = await api.get(`/sleeppeople/${id}`);
  return response.data;
}