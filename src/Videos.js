import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getVideos, selectedVideo } from './actions';
import VideoItem from './VideoItem';
import VideoPlay from './VideoPlay';

const Videos = (props) => {
 
  useEffect(() => {
    props.getVideos(props.searchterm);
  }, [props.searchterm]);
  
  const renderList = () => {
    if(props.data !== null) {
      let videos = props.data.data.items;
      props.selectedVideo(props.data.data.items[0]);
      const finalData = videos.map((value) => {
        return <VideoItem key = {value.id.videoId} video = { value } /> 
      });
 
      return finalData;
    }
    return <div>Loading...</div>;
  };  

  return (
    <div className="ui relaxed divided list">
    {renderList()}
    </div>
  );
};

const getState = state => {
  return { data: state.getVideodata, searchterm: state.searchFor}; 
};

export default connect(getState, { getVideos, selectedVideo })(Videos);
