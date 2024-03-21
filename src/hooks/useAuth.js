import {useState, useEffect, useContext} from 'react';
import {URL} from '../API/const';
import {tokenContext} from '../context/tokenContext';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const {token, delToken} = useContext(tokenContext);

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
        if (err.response.status === 401) {
          delToken();
          setAuth({});
        } else {
          console.error(err);
          setAuth({});
        }
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
