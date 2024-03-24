import {useEffect, useState} from 'react';
import {URL} from '../API/const';

export const useBestPosts = () => {
  const [bestPosts, setBestPosts] = useState([]);

  useEffect(() => {
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
