import {useEffect, useState} from 'react';
import {URL} from '../API/const';
import {useSelector} from 'react-redux';

export const useBestPosts = () => {
  const token = useSelector(state => state.token.token);
  const [bestPosts, setBestPosts] = useState([]);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/r/science/best/.json`)
      .then(response => response.json())
      .then(json => {
        const posts = json.data.children;
        setBestPosts(posts);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return [bestPosts];
};
