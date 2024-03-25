import {useState, useEffect} from 'react';
import {URL} from '../API/const';
import {deleteToken} from '../store';
import {useDispatch, useSelector} from 'react-redux';

export const useAuth = () => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.token);
  console.log(useSelector(state => state.token));
  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        setAuth({name, iconImg});
      })
      .catch(err => {
        console.error(err);
        dispatch(deleteToken(''));
        setAuth({});
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
