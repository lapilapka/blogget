import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';

export const Modal = ({closeModal, children, isModalOpen}) => {
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current || e.keyCode === 27) {
      if (navigate) {
        navigate(-1);
      } else {
        closeModal();
      }
    }
  };

  const handleEsc = e => {
    if (isModalOpen && closeModal) {
      if (e.key === 'Escape') {
        closeModal();
      }
    } else if (navigate) {
      navigate(-1);
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
          onClick={() => {
            if (closeModal) {
              closeModal();
            } else {
              navigate(-1);
            }
          }}><CloseIcon /></button>
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
