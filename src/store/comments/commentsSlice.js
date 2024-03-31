import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsAction';

const initialState = {
  comments: [],
  status: '',
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(commentsRequestAsync.pending, (state) => {
        state.error = '';
        state.status = 'loading';
      })
      .addCase(commentsRequestAsync.fulfilled, (state, action) => {
        state.comments = action.payload.data;
        state.error = '';
        state.status = 'loaded';
      })
      .addCase(commentsRequestAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'error';
      });
  },
});

export default commentsSlice.reducer;
