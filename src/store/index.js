import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {formCommentReducer} from './formCommentReducer';
import {authReducer} from './auth/authReducer';
import commentsReducer from './comments/commentsSlice';
import postsReducer from './posts/postsSlice';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import {searchReducer} from './search/searchReducer';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: formCommentReducer,
    auth: authReducer,
    comments: commentsReducer,
    posts: postsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

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
