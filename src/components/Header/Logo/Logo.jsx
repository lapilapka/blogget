import React from 'react';
import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => (
  <a href='/'
    className={style.link}>
    <img src={logo}
      alt='Лого Blogget'
      className={style.logo} />
  </a>
);

