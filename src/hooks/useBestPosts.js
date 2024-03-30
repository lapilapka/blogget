import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/posts/postsAction';

export const useBestPosts = () => {
  const dispatch = useDispatch();
  const bestPosts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const after = useSelector(state => state.posts.after);
  useEffect(() => {
    dispatch(postsRequestAsync());
  }, []);
  return [bestPosts, loading, after];
};
