import {createSlice} from '@reduxjs/toolkit';
import {
  postsRequestAsync
} from './postsAction';


export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_SUCCESS_AFTER = 'POSTS_REQUEST_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';

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

