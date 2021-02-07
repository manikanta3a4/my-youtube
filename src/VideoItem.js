import react from 'react';
import './VideoItem.css';
import { selectedVideo } from './actions';
import { connect } from 'react-redux';

const VideoItem = ({ video, selectedVideo }) => {
  return (
    <div className = "video-item item">
      <img className="ui image" src = {video.snippet.thumbnails.medium.url} onClick = {() => selectedVideo(video)}/>
      <div className="content">
        <div className="header" onClick = {() => selectedVideo(video)}>{video.snippet.title}</div>
      </div>
    </div>   
  ); 
};

export default connect(null, { selectedVideo })(VideoItem);
