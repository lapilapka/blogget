import style from './LogoutBtn.module.css';
import PropTypes from 'prop-types';

export const LogoutBtn = ({isShowLogoutBtn, delToken}) => {
  if (isShowLogoutBtn) {
    return <button className={style.logout}
      onClick={delToken}>Test
    </button>;
  }
};

LogoutBtn.propTypes = {
  isShowLogoutBtn: PropTypes.bool,
  delToken: PropTypes.func,
};
