const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const fetchNews = async () => {
  const response = await fetch(`${BASE_URL}/newstories.json`);
  const ids = await response.json();
  const news = await Promise.all(
    ids.slice(0, 100).map(async (id) => {
      const newsResponse = await fetch(`${BASE_URL}/item/${id}.json`);
      return newsResponse.json();
    })
  );
  return news;
};

export const fetchComments = async (id) => {
  const response = await fetch(`${BASE_URL}/item/${id}.json`);
  const story = await response.json();
  const comments = await Promise.all(
    story.kids.map(async (commentId) => {
      const commentResponse = await fetch(`${BASE_URL}/item/${commentId}.json`);
      return commentResponse.json();
    })
  );
  return comments;
};
