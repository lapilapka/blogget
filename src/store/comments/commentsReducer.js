import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR, COMMENTS_REQUEST_SUCCESS
} from './commentsAction';

const initialState = {
  comments: [],
  status: '',
  error: '',
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        comments: action.data,
        status: 'loaded',
        error: '',
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        comments: action.error,
        status: 'error',
      };

    default:
      return state;
  }
};
