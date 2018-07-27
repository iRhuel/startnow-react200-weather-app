import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Information from './components/Information';
import History from './components/History';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3'>Origin Weather Application</h1>
          <br />
          <h5 className='display-5'>Always know if you'll need an umbrella!</h5>
        </div>
        <SearchBar />
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <Information />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
