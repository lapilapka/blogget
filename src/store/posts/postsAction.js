import axios from 'axios';
import {URL} from '../../API/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(postsRequest());
  axios(`${URL}/r/science/best/.json`)
    .then(data => {
      const posts = data.data.data.children;
      dispatch(postsRequestSuccess(posts));
    })
    .catch(err => {
      console.error(err);
      dispatch(postsRequestError(err.toString()));
    });
};
