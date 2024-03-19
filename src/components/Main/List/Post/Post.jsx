import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';
import Rating from './Rating';
import DeleteButton from './DeleteButton';
import Content from './Content';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <img className={style.img}
        src={notphoto}
        alt='' />
      <Content author={author} title={title} />
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

