// import {
//   CHANGE_PAGE,
//   POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS,
//   POSTS_REQUEST_SUCCESS_AFTER
// } from './postsAction';
//
// const initialState = {
//   posts: [],
//   error: '',
//   loading: false,
//   after: '',
//   isLast: false,
//   page: '',
//   count: 0,
// };
//
// export const postsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case POSTS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case POSTS_REQUEST_SUCCESS:
//       return {
//         ...state,
//         posts: action.posts,
//         error: '',
//         loading: false,
//         after: action.after,
//         isLast: !action.after,
//       };
//     case POSTS_REQUEST_SUCCESS_AFTER:
//       return {
//         ...state,
//         posts: [...state.posts, ...action.posts],
//         error: '',
//         loading: false,
//         after: action.after,
//         isLast: !action.after,
//         count: state.count + 1,
//       };
//     case POSTS_REQUEST_ERROR:
//       return {
//         ...state,
//         posts: action.error,
//         loading: false,
//       };
//     case CHANGE_PAGE:
//       return {
//         ...state,
//         page: action.page,
//         after: '',
//         isLast: false,
//       };
//
//     default:
//       return state;
//   }
// };
