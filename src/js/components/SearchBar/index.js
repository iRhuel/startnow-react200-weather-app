import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
  return {
    searchString: store.searchBar.searchString
  };
}

export default connect(mapStoreToProps)(SearchBar);
