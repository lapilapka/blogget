import style from './Preloader.module.css';
import PuffLoader
  from 'react-spinners/PuffLoader';
import PropTypes from 'prop-types';

export const Preloader = ({size}) => (
  <>
    <div className={style.wrapper}>
      <PuffLoader color='#cc6633'
        size={size} />
    </div>
  </>
);

Preloader.propTypes = {
  size: PropTypes.number,
};

