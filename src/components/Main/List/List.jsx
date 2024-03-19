import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title',
      author: 'Nickname1',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
      id: '123',
    },
    {
      thumbnail: '',
      title: 'Title',
      author: 'Nickname2',
      ups: 50,
      date: '2022-05-07T09:45:00.000Z',
      id: '456',
    },
    {
      thumbnail: '',
      title: 'Title',
      author: 'Nickname3',
      ups: 2,
      date: '2022-12-12T09:45:00.000Z',
      id: '789',
    },
    {
      thumbnail: '',
      title: 'Title',
      author: 'Nickname4',
      ups: 100,
      date: '2022-01-24T09:45:00.000Z',
      id: '321',
    },
  ];
  return (
    <ul className={style.list}>
      {
        postsData.map((postData) => <Post key={postData.id}
          postData={postData}></Post>)
      }
    </ul>
  );
};
