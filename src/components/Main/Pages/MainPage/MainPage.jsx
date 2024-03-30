import style from './MainPage.module.css';
import {Text} from '../../../../UI/text';
export const MainPage = () => (
  <div className={style.wrapper}>
    <Text As='h2' center bold size={24}>Стартовая страница</Text>
    <p className={style.welcome}>Добро пожаловать!</p>
    <p>Выберите категорию</p>
  </div>
);
