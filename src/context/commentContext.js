import React from 'react';
import PropTypes from 'prop-types';
import {useCommentData} from '../hooks/useCommentData';

export const commentContext = React.createContext({});

export const CommentContextProvider = ({children, id}) => {
  const [comments, isLoading] = useCommentData(id);
  return (
    <commentContext.Provider value={{comments, isLoading}}>
      {children}
    </commentContext.Provider>
  );
};

CommentContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};
