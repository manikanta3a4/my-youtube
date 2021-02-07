import react,{useRef} from 'react';
import { searchTerm } from './actions'; 
import { connect } from 'react-redux';
import './VideoItem.css';

const Search = ({ searchTerm }) => {

  const inputEle = useRef('');

  const render = () => {
    return (
      <div className="search-bar ui segment">
        <input ref = {inputEle} type = "text" className = "field"/>
        <button onClick={() => searchTerm(inputEle.current.value)}>Search</button> 
      </div>
    );
  }

  return <>{render()}</>;
};

const getState = state => {
  return { input: state.searchTerm };
};

export default connect(getState, { searchTerm })(Search);
