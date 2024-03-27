import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/commentsAction';

export const useCommentData = (id) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments);
  const status = useSelector(state => state.comments.status);
  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, []);
  return [comments, status];
};
