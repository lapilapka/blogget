import React, {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/text';

import {ReactComponent as LoginIcon} from './img/login.svg';
import {URL} from '../../../API/const';
import LogoutBtn from './LogoutBtn';


export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isShowLogoutBtn, setIsShowLogoutBtn] = useState(false);

  const toggleAvatarBtn = () => {
    setIsShowLogoutBtn(!isShowLogoutBtn);
  };

  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        setAuth({name, iconImg});
      })
      .catch(err => {
        if (err.response.status === 401) {
          delToken();
          setAuth({});
        } else {
          console.error(err);
          setAuth({});
        }
      });
  }, [token]);
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
          <LogoutBtn isShowLogoutBtn={isShowLogoutBtn} />
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

