import jsonPlaceholder from '../api';

export const getVideos = term => async dispatch => {
  const response = await jsonPlaceholder.get('/search', { params:{ q:term } });
  dispatch({type:"SEARCH_DATA", payload:response});
};

export const selectedVideo = (video) => {
  return {
    type: "SELECTED_VIDEO",
    payload: video
  }
};

export const searchTerm = (term) => {
  return {
    type: "SEARCH_TERM",
    payload: term
  }
};
