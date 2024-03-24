import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';

export const Modal = ({closeModal, children, isModalOpen}) => {
  const overlayRef = useRef(null);
  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current || e.keyCode === 27) {
      closeModal();
    }
  };

  const handleEsc = e => {
    if (isModalOpen) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }
  };


  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('click', handleClick);
      document.addEventListener('keydown', handleEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay}
      ref={overlayRef}>
      <div className={style.modal}>
        {children}
        <button className={style.close}
          onClick={() => closeModal()}><CloseIcon /></button>
      </div>
    </div>, document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  isModalOpen: PropTypes.bool,
};
