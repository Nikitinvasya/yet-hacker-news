import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ id, title, score, by, time }) => {
  return (
    <div>
      <h2><Link to={`/news/${id}`}>{title}</Link></h2>
      <p>Рейтинг: {score} | Автор: {by} | Дата: {new Date(time * 1000).toLocaleString()}</p>
    </div>
  );
};

export default NewsItem;
