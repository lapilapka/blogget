import {useEffect, useRef, useState} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../../../UI/text';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../../../store';

export const FormComment = () => {
  // const store = useStore();
  // const value = store.getState().comment;
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();
  const [isShowForm, setIsShowForm] = useState(false);
  const textareaRef = useRef(null);
  const showForm = () => {
    setIsShowForm(!isShowForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  useEffect(() => {
    isShowForm && textareaRef.current.focus();
  }, [isShowForm]);

  return (
    <div className={style.wrapper}>
      <button onClick={() => showForm()}
        className={style.btn}>Показать форму
      </button>
      {
        isShowForm && <form onSubmit={handleSubmit}
          className={style.form}><Text As='h3'
            size={14}
            tsize={18}>Имя авторизованного пользователя
          </Text>
          <textarea ref={textareaRef}
            onChange={handleChange}
            value={value}
            className={style.textarea}></textarea>
          <button
            className={style.btn}>Отправить
          </button>
        </form>
      }
    </div>
  );
};


