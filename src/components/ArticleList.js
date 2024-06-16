import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';
import ArticleCard from './ArticleCard';
import { Skeleton } from 'antd';
import './ArticleList.css';

const ArticleList = () => {
  const { isLoading, articles } = useContext(ArticlesContext);

  return isLoading ? <Skeleton active /> : (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
