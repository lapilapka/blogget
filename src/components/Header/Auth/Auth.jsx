import React, {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/text';

import {ReactComponent as LoginIcon} from './img/login.svg';
import LogoutBtn from './LogoutBtn';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import {Preloader} from '../../../UI/AuthLoader/Preloader';

export const Auth = () => {
  const dispatch = useDispatch();
  const [isShowLogoutBtn, setIsShowLogoutBtn] = useState(false);
  const [auth, clearAuth, loading] = useAuth();
  const toggleAvatarBtn = () => {
    setIsShowLogoutBtn(!isShowLogoutBtn);
  };

  const logOut = () => {
    dispatch(deleteToken(''));
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (<Preloader size={30} />) : auth.name ? (
        <div>
          <button onClick={toggleAvatarBtn}
            className={style.btn}>
            <img src={auth.iconImg}
              title={auth.name}
              alt={`Аватар ${auth.name}`} />
          </button>
          <LogoutBtn logOut={logOut} isShowLogoutBtn={isShowLogoutBtn} />
        </div>
  ) :
  (
    <Text As='a'
      href={urlAuth}><LoginIcon className={style.svg} /></Text>
  )
      }
    </div>
  )
  ;
};
Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};

