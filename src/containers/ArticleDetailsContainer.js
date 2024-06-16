import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';
import ArticleDetails from '../pages/ArticleDetails';
import { Skeleton } from 'antd';

const ArticleDetailsContainer = () => {
  const { isLoading, selectedArticle } = useContext(ArticlesContext);

  return  isLoading ? <Skeleton active /> : (selectedArticle ? <ArticleDetails article={selectedArticle} /> : null);
};

export default ArticleDetailsContainer;
