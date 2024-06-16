import React from "react";
import "./ArticleDetails.css";

const ArticleDetails = ({ article }) => {
  return (
    <div className="article-details">
      <img src={article.randomImage} alt={article.title} className="article-image" />{" "}
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <p>{article.byline}</p>
      <ul className="horizontal-list">
        <li>{article.published_date}</li>
        <li>{article.source}</li>
        <li>{article.subsection}</li>
      </ul>
    </div>
  );
};

export default ArticleDetails;
