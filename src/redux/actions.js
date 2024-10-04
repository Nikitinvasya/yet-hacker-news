import { fetchNews, fetchComments } from '../api/hackerNewsApi';

export const fetchNewsSuccess = (news) => ({ type: 'FETCH_NEWS_SUCCESS', payload: news });
export const fetchCommentsSuccess = (id, comments) => ({ type: 'FETCH_COMMENTS_SUCCESS', id, payload: comments });
export const setLoading = () => ({ type: 'SET_LOADING' });

export const getNews = () => async (dispatch) => {
  dispatch(setLoading());
  const news = await fetchNews();
  dispatch(fetchNewsSuccess(news));
};

export const getComments = (id) => async (dispatch) => {
  dispatch(setLoading());
  const comments = await fetchComments(id);
  dispatch(fetchCommentsSuccess(id, comments));
};
