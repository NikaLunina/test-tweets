import axios from 'axios';

axios.defaults.baseURL = 'https://646df7c89c677e23218abc55.mockapi.io';

export const fetchDataCard = async (page, limit, selected) => {
  try {
    if (page && limit) {
      return await axios
        .get(`/?page=${page}&limit=${limit}&followed=${selected}`)
        .then(({ data }) => {
          return data;
        });
    }
    return await axios.get(`/?followed=${selected}`).then(({ data }) => {
      return data;
    });
  } catch (error) {
    alert(error);
  }
};


export const updateFetchCard = async (cardId, userData) => {
  try {
    await axios.put(`/${cardId}`, { ...userData }).then(({ data }) => {
      return data;
    });
  } catch (error) {
    alert(error);
  }
};