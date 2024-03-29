import PuffLoader
  from 'react-spinners/PuffLoader';
import PropTypes from 'prop-types';

export const Preloader = ({size}) => (
  <PuffLoader color='#cc6633'
    size={size} />
);

Preloader.propTypes = {
  size: PropTypes.number,
};

