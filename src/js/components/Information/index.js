import { connect } from 'react-redux';
import Information from './Information';

function mapStoreToProps(store) {
  return {
    searchResult: store.searchBar.searchResult
  };
}

export default connect(mapStoreToProps)(Information);
