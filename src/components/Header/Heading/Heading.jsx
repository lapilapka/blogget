import style from './Heading.module.css';
import {Text} from '../../../UI/text';

export const Heading = () => (
  <Text As='h1'
    className={style.heading}
    size={22}
    tsize={26}
    center
  >Главная</Text>
);
