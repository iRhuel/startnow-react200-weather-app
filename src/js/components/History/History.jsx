import React, { Component } from 'react';

export default class History extends Component {
  render() {
    const { searchHistory } = this.props;
    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>Search History</div>
        <div className='card-body'>
          <ul className='list-group'>
            { searchHistory.map(item => (
              <li className='list-group-item flex'>
                <div>{item.searchString}</div>
                <div>
                  {item.searchTime.toLocaleDateString()}<br />{item.searchTime.toLocaleTimeString()}
                </div>
              </li>
            )) }
          </ul>
        </div>
      </div>
    );
  }
}
