import logo from './logo.svg';
import './App.css';
import Videos from './Videos';
import VideoPlay from './VideoPlay';
import Search from './Search';

function App() {
  return (
    <div className="ui container">
      <Search />
      <div className = "col-md-7 col-lg-7 col-xs-12 col-sm-12">
        <VideoPlay />
      </div>
      <div className = "col-md-5 col-lg-5 col-xs-12 col-sm-12">
        <Videos />
      </div>
    </div>
  );
}

export default App;
