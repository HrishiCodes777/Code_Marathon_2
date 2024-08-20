import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPlayersStatistics,postMatch } from '../api/api';

export const fetchDataAsync = createAsyncThunk('data/fetchData', async () => {
  const response = await fetchPlayersStatistics();
  return response.data;
});

export const postDataAsync = createAsyncThunk('data/postData', async (newData) => {
  const response = await postMatch(newData);
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(postDataAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default dataSlice.reducer;