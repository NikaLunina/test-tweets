import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataCard, updateDataCard } from '../services/Api';


export const fetchGetCard = createAsyncThunk(
  'card/fetchGetCard',
  async (_, thunkAPI) => {
    try {
      const response = await fetchDataCard();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUpdateCard = createAsyncThunk(
  'card/fetchCardUpdate',
  async (data, thunkAPI) => {
    try {
      const response = await updateDataCard(data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);