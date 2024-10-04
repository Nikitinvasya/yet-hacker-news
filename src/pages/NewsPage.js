import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../redux/actions';
import Comments from '../components/Comments';

const NewsPage = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments[id]);

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);

  return (
    <div>
      <button onClick={() => dispatch(getComments(id))}>Обновить комментарии</button>
      {comments ? <Comments comments={comments} /> : <p>Загрузка комментариев...</p>}
    </div>
  );
};

export default NewsPage;
