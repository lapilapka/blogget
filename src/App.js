import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {getToken} from './API/token';
import {updateToken} from './store/tokenReducer';
import {PostContextProvider} from './context/postContext';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <PostContextProvider>
      <Header />
      <Main />
    </PostContextProvider>

  );
};
export default App;
