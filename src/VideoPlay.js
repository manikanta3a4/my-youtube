import { connect } from 'react-redux';
import './VideoItem.css';

const VideoPlay = ({ playVideo }) => {
  if(playVideo === null) {
    return <div>Loading...</div>
  }

  const url = `https://www.youtube.com/embed/${playVideo.id.videoId}`;

  const renderData = () => {
    return(
      <div className = "play-video">
        <div className="ui embed">
          <iframe src = {url} />
        </div>
        <div className="ui segment">
          <h3 className="ui header">{playVideo.snippet.title}</h3>
          <p>{playVideo.snippet.description}</p>
        </div>
      </div>
    );
  }

  return <div>{renderData()}</div>;
};

const getState = (state) => {
       return { playVideo: state.selectedVideo }; 
         //return { playVideo:state.getVideodata.data.data.items[0] };
}

export default connect(getState)(VideoPlay);
