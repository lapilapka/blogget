import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import Content from './Content';
import Rating from './Rating';
import formatDate from '../../../utils/formatDate';

export const Post = ({bestPostData}) => {
  const {
    title, author, ups, thumbnail, created
  } = bestPostData;

  const imgFormat = ['jpg', 'jpeg', 'png', 'svg', 'gif'];
  let postImg = notphoto;
  imgFormat.forEach(format => {
    if (thumbnail.includes(format)) {
      if (thumbnail.includes('?')) {
        postImg = thumbnail.split('?')[0];
        return postImg;
      } else {
        postImg = thumbnail;
        return postImg;
      }
    }
  });

  return (
    <li className={style.post}>
      <img className={style.img}
        src={postImg}
        alt='' />
      <Content author={author}
        title={title} />
      <Rating ups={ups}></Rating>
      <time className={style.date}
        dateTime={created}>{formatDate(created)}</time>
      <DeleteButton></DeleteButton>
    </li>
  );
};

Post.propTypes = {
  bestPostData: PropTypes.object,
};

