import style from './List.module.css';
import Post from './Post';
import {useBestPosts} from '../../../hooks/useBestPosts';

export const List = () => {
  const [bestPosts] = useBestPosts();
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
