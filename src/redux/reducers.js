const initialState = {
    news: [],
    comments: {},
    loading: false,
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_NEWS_SUCCESS':
        return { ...state, news: action.payload, loading: false };
      case 'FETCH_COMMENTS_SUCCESS':
        return { ...state, comments: { ...state.comments, [action.id]: action.payload }, loading: false };
      case 'SET_LOADING':
        return { ...state, loading: true };
      default:
        return state;
    }
  }
  