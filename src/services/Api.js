import axios from 'axios';

axios.defaults.baseURL = 'https://646fb90909ff19b12087b1e8.mockapi.io';

export const fetchDataCard = async (page) => {
  const response = await axios.get(`/users/?page=${page}&limit=3`);
  return response.data;
};

export const updateFetchCard = async (id, { check, followers }) => {
  const response = await axios.put(`users/${id}`, { check, followers });
  return response.data;
};