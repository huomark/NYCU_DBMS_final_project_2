import axios from 'axios';

export const createRecord = async (recordData: any) => {
  const response = await axios.post('/api/sleeppeople', recordData);
  return response.data;
};

export const getRecordsList = async () => {
  const response = await axios.get('/api/sleeppeople');
  return response.data;
};

export const getRecordDetails = async (id: string) => {
  const response = await axios.get(`/api/sleeppeople/${id}`);
  return response.data;
};
