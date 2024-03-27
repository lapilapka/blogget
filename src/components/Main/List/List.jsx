import style from './List.module.css';
import Post from './Post';
import {useBestPosts} from '../../../hooks/useBestPosts';
import Preloader from '../../../UI/AuthLoader';

export const List = () => {
  const [bestPosts, loading] = useBestPosts();
  return (
    <ul className={style.list}>
      {loading ? <Preloader size={150} /> :
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
