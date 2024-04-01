import axios from 'axios';
import {URL} from '../../API/const';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {postsSlice} from './postsSlice';

export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_SUCCESS_AFTER = 'POSTS_REQUEST_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';


export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  posts: data.children,
  after: data.after,
});

export const postsRequestSuccessAfter = (data) => ({
  type: POSTS_REQUEST_SUCCESS_AFTER,
  posts: data.children,
  after: data.after,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const postsRequestAsync = createAsyncThunk('posts/fetch',
  (newPage, thunkAPI) => {
    let page = thunkAPI.getState().posts.page;
    if (newPage) {
      page = newPage;
      thunkAPI.dispatch(postsSlice.actions.changePage(page));
    }
    const token = thunkAPI.getState().token.token;
    const after = thunkAPI.getState().posts.after;
    const isLast = thunkAPI.getState().posts.isLast;
    if (!token || isLast || !page) return;
    return axios(
      `${URL}/${page}/.json?limit=10&${after ? `after=${after}` : ''}`)
      .then(data => {
        if (after) {
          thunkAPI.dispatch(
            postsSlice.actions.postsRequestSuccessAfter(data.data.data));
        } else {
          thunkAPI.dispatch(
            postsSlice.actions.postsRequestSuccess(data.data.data));
        }
      })
      .catch(error => {
        console.error(error);
        thunkAPI.rejectWithValue(error.response.data.message);
      });
  });
