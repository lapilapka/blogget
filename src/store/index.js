import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {formCommentReducer} from './formCommentReducer';
import {thunk} from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {commentsReducer} from './comments/commentsReducer';
import {postsReducer} from './posts/postsReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: formCommentReducer,
  auth: authReducer,
  comments: commentsReducer,
  posts: postsReducer,
});

export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
