import React, { createContext, useState, useEffect } from 'react';
import { fetchArticles } from '../api/api';

export const ArticlesContext = createContext();

const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [period, setPeriod] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchArticles({period});
      setArticles(articles);
      setLoading(false);
    };
    getArticles();
  }, [period]);

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  const handlePeriodSelect = (period) => {
    setLoading(true);
    setPeriod(period);
  };


  const contextValue = {
    isLoading,
    articles,
    selectedArticle,
    handleArticleSelect,
    handlePeriodSelect,
  };

  return (
    <ArticlesContext.Provider value={contextValue}>
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
