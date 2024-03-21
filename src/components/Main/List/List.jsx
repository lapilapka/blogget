import style from './List.module.css';
import Post from './Post';
import {postContext} from '../../../context/postContext';
import {useContext} from 'react';

export const List = () => {
  const {bestPosts} = useContext(postContext);
  return (
    <ul className={style.list}>
      {
        bestPosts.map((postData) => {
          const bestPostData = postData.data;
          return (
            <Post key={bestPostData.id}
              bestPostData={bestPostData}>
            </Post>);
        }
        )
      }
    </ul>
  );
};
