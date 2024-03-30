import style from './Comments.module.css';
import CommentsContent from './CommentsContent';
import {useCommentData} from '../../../../../hooks/useCommentData';
import PropTypes from 'prop-types';
import {Preloader} from '../../../../../UI/AuthLoader/Preloader';
import React from 'react';
import {useParams} from 'react-router-dom';

export const Comments = () => {
  const {id} = useParams();
  const [comments, status] = useCommentData(id);
  return (
    <div className={style.list}>
      {status === 'loading' && <Preloader size={200} />}
      {status === 'loaded' && (
        <>
          <CommentsContent comments={comments} />
        </>
      )
      }
      {status === 'error' && <p>Ошибка</p>}
    </div>
  );
};

Comments.propTypes = {
  id: PropTypes.string
};
