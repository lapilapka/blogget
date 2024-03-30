import axios from 'axios';
import {URL} from '../../API/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentsRequestSuccess = (data) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  data,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  dispatch(commentsRequest());
  axios(`${URL}/comments/${id}/.json`)
    .then(data => {
      dispatch(commentsRequestSuccess(data.data));
    })
    .catch(err => {
      console.error(err);
      dispatch(commentsRequestError(err.toString()));
    });
};
