import axios from 'axios';
import {URL} from '../../API/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const commentsRequestAsync = createAsyncThunk('comments/fetch',
  (id, thunkAPI) => {
    const token = thunkAPI.getState().token.token;
    if (!token) return;
    return axios(`${URL}/comments/${id}/.json`)
      .then(data => data)
      .catch((error) => thunkAPI.rejectWithValue(error.response.data.message));
  });
