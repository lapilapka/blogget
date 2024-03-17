import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';
import Rating from './Rating';
import DeleteButton from './DeleteButton';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log(style);
  return (
    <li className={style.post}>
      <img className={style.img}
        src={notphoto}
        alt='' />

      <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost}
            href='#post'>
            {title}
          </a>
        </h2>
        <a className={style.linkAuthor}
          href='#author'>{author}</a>
      </div>
      <Rating ups={ups}></Rating>
      <time className={style.date}
        dateTime={date}>{formatDate(date)}</time>
      <DeleteButton></DeleteButton>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

