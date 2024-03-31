import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {formCommentReducer} from './formCommentReducer';
import {authReducer} from './auth/authReducer';
import commentsReducer from './comments/commentsSlice';
import postsReducer from './posts/postsSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: formCommentReducer,
    auth: authReducer,
    comments: commentsReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(tokenMiddleware),
});

// const rootReducer = combineReducers({
//   token: tokenReducer,
//   comment: formCommentReducer,
//   auth: authReducer,
//   comments: commentsReducer,
//   posts: postsReducer,
// });
//
// export const storeOld = createStore(rootReducer,
//   composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
