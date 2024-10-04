import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../redux/actions';
import NewsItem from '../components/NewsItem';

const HomePage = () => {
  const dispatch = useDispatch();
  const { news, loading } = useSelector(state => state);

  useEffect(() => {
    dispatch(getNews());
    const interval = setInterval(() => dispatch(getNews()), 60000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(getNews())}>Обновить новости</button>
      {loading ? <p>Загрузка...</p> : news.map(item => <NewsItem key={item.id} {...item} />)}
    </div>
  );
};

export default HomePage;
