import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/text';
// import Modal from '../../../../Modal';
// import {useState} from 'react';
// import Comments from '../Comments';
// import FormComment from '../Comments/FormComment';
import {Link, useParams} from 'react-router-dom';

export const Content = ({title, author, id}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const {page} = useParams();

  return (
    <div className={style.content}>
      <Text
        As='h2'
        className={style.title}>
        <Link className={style.linkPost}
          to={`/category/${page}/post/${id}`}>
          {title}
        </Link>
      </Text>
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#autor'
      >{author}</Text>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string
};
