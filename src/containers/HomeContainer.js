import React, { useContext   } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';
import { Skeleton } from 'antd';
import ArticleList from '../components/ArticleList';


const HomeContainer = () => {

  const { isLoading, articles } = useContext(ArticlesContext);

  return  isLoading ? <Skeleton active /> : (articles ? <ArticleList articles={articles} /> : null);
};

export default HomeContainer;