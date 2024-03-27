import {
  POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS
} from './postsAction';

const initialState = {
  posts: [],
  error: '',
  loading: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.data,
        error: '',
        loading: false,
      };
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        posts: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
