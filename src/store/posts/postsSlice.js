import {createSlice} from '@reduxjs/toolkit';
import {
  postsRequestAsync
} from './postsAction';

const initialState = {
  posts: [],
  error: '',
  loading: false,
  after: '',
  isLast: false,
  page: '',
  count: 0,
};


export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.count = 0;
      state.isLast = false;
    },
    postsRequestSuccess: (state, action) => {
      state.posts = action.payload.children;
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postsRequestSuccessAfter: (state, action) => {
      state.posts = [...state.posts, ...action.payload.children];
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.count += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postsRequestAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;

