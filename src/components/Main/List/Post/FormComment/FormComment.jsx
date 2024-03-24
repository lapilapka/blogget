import {useEffect, useRef, useState} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../../../UI/text';

export const FormComment = () => {
  const [isShowTextarea, setIsShowTextarea] = useState(false);
  const textareaRef = useRef(null);
  const handleClick = () => {
    setIsShowTextarea(true);
  };

  useEffect(() => {
    isShowTextarea && textareaRef.current.focus();
  }, [isShowTextarea]);

  return (
    <form className={style.form}>
      <Text As='h3'
        size={14}
        tsize={18}>Имя авторизованного пользователя
      </Text>
      {
        isShowTextarea && <textarea ref={textareaRef}
          className={style.textarea}></textarea>
      }
      <button onClick={() => handleClick()}
        className={style.btn}>Отправить
      </button>
    </form>
  );
};


