import style from './Comments.module.css';
import Loader from '../../../../Loader';
import CommentsContent from './CommentsContent';
import {useContext} from 'react';
import {commentContext} from '../../../../../context/commentContext';


export const Comments = () => {
  const {isLoading, comments} = useContext(commentContext);
  return (
    <div className={style.list}>
      {isLoading ? <Loader /> : (<CommentsContent comments={comments} />)
      }
    </div>
  );
};


