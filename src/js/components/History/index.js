import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
  return {
    searchHistory: store.searchBar.searchHistory
  };
}

export default connect(mapStoreToProps)(History);
