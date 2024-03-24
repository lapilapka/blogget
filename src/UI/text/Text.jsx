import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    bold,
    medium,
    onClick
  } = prop;

  const classes = classNames(
    className,
    style[`fs${size}`],
    style[color],
    {[style.center]: center},
    {[style.bold]: bold},
    {[style.medium]: medium},
    {[style[`fs${size}`]]: size},
    {[style[`fst${size}`]]: tsize},
    {[style[`fsd${size}`]]: dsize},
  );

  return <As
    className={classes}
    href={href}
    onClick={onClick}
  >{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  func: PropTypes.func,
};
