import {
  SEARCH_REQUEST, SEARCH_REQUEST_ERROR, SEARCH_REQUEST_SUCCESS
} from './searchAction';

const initialState = {
  posts: [],
  error: '',
  loading: false,
  after: '',
  isLast: false,
};

//
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        error: '',
        loading: false,
        after: action.after,
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
