import { combineReducers } from 'redux';
import searchBarReducer from './components/SearchBar/SearchBarReducer';

const rootReducer = combineReducers({
  searchBar: searchBarReducer
});

export default rootReducer;
