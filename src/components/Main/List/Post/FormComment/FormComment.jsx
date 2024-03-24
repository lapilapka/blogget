import {useEffect, useRef, useState} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../../../UI/text';

export const FormComment = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const textareaRef = useRef(null);
  const showForm = () => {
    setIsShowForm(!isShowForm);
  };
  const handleClick = (e) => {
    console.log(textareaRef.current.value);
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
        isShowForm && <form className={style.form}><Text As='h3'
          size={14}
          tsize={18}>Имя авторизованного пользователя
        </Text>
        <textarea ref={textareaRef}
          className={style.textarea}></textarea>
        <button onClick={() => handleClick()}
          className={style.btn}>Отправить
        </button>
        </form>
      }
    </div>
  );
};


