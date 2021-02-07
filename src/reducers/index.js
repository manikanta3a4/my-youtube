import { combineReducers } from 'redux';

const getVideodata = (state = null, action) => {
  if(action.type === "SEARCH_DATA") {
     return action.payload;
  }

  return state;
};

const selectedVideo = (state = null, action) => {
  if(action.type === "SELECTED_VIDEO") {
     return action.payload;
  }

  return state;
};

const searchFor = (state = null, action) => {
  if(action.type === "SEARCH_TERM") {
     return action.payload;
  }

  return state;
};

export default combineReducers({
  getVideodata,
  selectedVideo,
  searchFor
});
