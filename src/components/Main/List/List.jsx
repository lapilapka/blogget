import style from './List.module.css';
import Post from './Post';
import {useBestPosts} from '../../../hooks/useBestPosts';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';
import Preloader from '../../../UI/AuthLoader';

export const List = () => {
  const [bestPosts, loading] = useBestPosts();
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  const count = useSelector(state => state.posts.count);

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (!bestPosts.length && loading) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && count < 2) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    if (endList.current) {
      observer.observe(endList.current);
    }

    return () => {
      if (endList.current && count < 2) {
        observer.unobserve(endList.current);
      }
    };
  }, [count]);

  const loadPosts = (page) => {
    dispatch(postsRequestAsync());
  };

  return (
    <>
      <ul className={style.list}>
        {
          loading && <Preloader size={200} />
        }
        {
          bestPosts.map((postData) => {
            const bestPostData = postData.data;
            return (
              <Post key={bestPostData.id}
                bestPostData={bestPostData}>
              </Post>);
          })
        }
        <li ref={endList}
          className={style.end}></li>
      </ul>
      {
        count === 2 && <button className={style.btn}
          onClick={() => loadPosts()}>Загрузить еще</button>
      }
      <Outlet />
    </>
  );
};
