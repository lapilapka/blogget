import {useEffect, useState} from 'react';
import {URL} from '../API/const';
export const useCommentData = (id) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${URL}/r/science/comments/${id}/.json`)
      .then(response => response.json())
      .then(json => {
        setComments(json);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return [comments, isLoading];
};
