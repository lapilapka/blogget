import style from './CommentsContent.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../../../utils/formatDate';

export const CommentsContent = ({comments}) => {
  const postComments = comments[1].data.children;
  return (
    <div className={style['comments-content']}>
      {
        postComments.length ? postComments.map(comment => {
          if (comment.data.body) {
            return (
              <div key={comment.data.id}
                className={style.item}>
                <p
                  className={style.date}>{formatDate(comment.data.created)}</p>
                <p className={style.author}>{comment.data.author}</p> <p
                  className={style.comment}>{comment.data.body}</p></div>);
          }
        }) :
          <p>Комментариев нет.</p>
      }
    </div>
  );
};

CommentsContent.propTypes = {
  comments: PropTypes.array,
};
