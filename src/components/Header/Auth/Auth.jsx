import React, {useState, useContext} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/text';

import {ReactComponent as LoginIcon} from './img/login.svg';
import LogoutBtn from './LogoutBtn';
import {authContext} from '../../../context/authContext';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store';

export const Auth = () => {
  const dispatch = useDispatch();
  const [isShowLogoutBtn, setIsShowLogoutBtn] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const toggleAvatarBtn = () => {
    setIsShowLogoutBtn(!isShowLogoutBtn);
  };

  const logOut = () => {
    dispatch(deleteToken(''));
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
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

