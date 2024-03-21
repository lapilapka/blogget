import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {assignId} from '../../utils/generateRandomId';

import {ReactComponent as ArrrowIcon} from './img/arrow.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounceRaf} from '../../utils/debounce';
import {Text} from '../../../UI/text';


const LIST = [
  {value: 'Главная', Icon: HomeIcon, href: '#'},
  {value: 'Топ', Icon: TopIcon, href: '#'},
  {value: 'Лучшие', Icon: BestIcon, href: '#'},
  {value: 'Горячие', Icon: HotIcon, href: '#'},
].map(assignId);

export const Tabs = () => {
  // const [list, setList] = useState(LIST);
  // const addItem = () => {
  //   setList(list.concat(assignId({value: 'Новый пост'})));
  // };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [mainDropdownBtn, setMainDropdownBtn] = useState('Главная');

  const clickDropdownBtn = (id) => {
    setMainDropdownBtn((LIST.find(item => item.id === id)).value);
  };

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(
              !isDropdownOpen)}>
            <Text bold>{mainDropdownBtn}</Text><ArrrowIcon width={15}
              height={15} /></button>
        </div>)}
      {(isDropdownOpen || !isDropdown) && <ul className={style.list}
        onClick={() => setIsDropdownOpen(false)}>
        {LIST.map(({value, id, Icon}) => (
          <li className={style.item}
            key={id}>
            <button
              className={style.btn}
              onClick={() => clickDropdownBtn(id)}>
              <Text bold>{value}</Text>
              {Icon && <Icon width={30}
                height={30} />}
            </button>
          </li>
        ))}
      </ul>}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
