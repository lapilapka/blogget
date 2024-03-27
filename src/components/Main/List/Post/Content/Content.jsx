import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/text';
import Modal from '../../../../Modal';
import {useState} from 'react';
import Comments from '../Comments';
import FormComment from '../Comments/FormComment';

export const Content = ({title, author, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text
        As='h2'
        className={style.title}>
        <Text As='a'
          className={style.linkPost}
          size={18}
          tsize={24}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
          }}>
          {title}
        </Text>
      </Text>
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#autor'
      >{author}</Text>
      {
        isModalOpen && <Modal isModalOpen={isModalOpen}
          closeModal={() => {
            setIsModalOpen(false);
          }
          }>
          <FormComment></FormComment>
          <Comments id={id}></Comments>
        </Modal>
      }
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string
};
