import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import FormComment from './List/Post/Comments/FormComment';
import Comments from './List/Post/Comments';
import MainPage from './Pages/MainPage';
import ErrorPage from './Pages/ErrorPage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs></Tabs>
      <Routes>
        <Route path='/category/:page'
          element={<List />}>
          <Route path='post/:id'
            element={
              <Modal>
                <FormComment></FormComment>
                <Comments></Comments>
              </Modal>} />
        </Route>
        <Route path='/' element={<MainPage />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Layout>
  </main>
);

