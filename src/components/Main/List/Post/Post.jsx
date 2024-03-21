import style from './Post.module.css';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import Content from './Content';
import Rating from './Rating';

export const Post = ({bestPostData}) => {
  const {title, author, ups, thumbnail} = bestPostData;

  return (
    <li className={style.post}>
      <img className={style.img}
        src={thumbnail.includes('?') ? thumbnail.split('?')[0] : thumbnail}
        alt='' />
      <Content author={author}
        title={title} />
      <Rating ups={ups}></Rating>
      <DeleteButton></DeleteButton>
    </li>
  );
};

Post.propTypes = {
  bestPostData: PropTypes.object,
};

