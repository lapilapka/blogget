import style from './LogoutBtn.module.css';
import PropTypes from 'prop-types';

export const LogoutBtn = ({isShowLogoutBtn, delToken, logOut}) => {
  if (isShowLogoutBtn) {
    return <button className={style.logout}
      onClick={logOut}>Выход
    </button>;
  }
};

LogoutBtn.propTypes = {
  isShowLogoutBtn: PropTypes.bool,
  delToken: PropTypes.func,
  logOut: PropTypes.func
};
