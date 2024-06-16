import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ArticlesContext } from '../context/ArticlesContext';
import "./ArticleCard.css";

const ArticleCard = ({ article }) => {

  const { handleArticleSelect } = useContext(ArticlesContext);

  const  images = [
    "/news1.jpg",
    "/news2.jpg",
    "/news3.jpg",
    "/news4.jpg",
    "/news5.jpg",
    "/news6.jpg",
    "/news7.jpg",
    "/news8.jpg",
    "/news9.jpg",
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const handleSelect = () => {
    article.randomImage = randomImage;
    handleArticleSelect(article);
  };

  return (
    <div
      className="article-card"
      onClick={handleSelect}
      onKeyDown={handleSelect}
      role="button"
      tabIndex="0"
    >
      <img src={randomImage} alt="Article" className="article-image" />
      <div className="article-content">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <Link to="/article">View More</Link>
      </div>
    </div>
  );
}

export default ArticleCard;
