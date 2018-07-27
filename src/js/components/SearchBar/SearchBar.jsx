import React, { Component } from 'react';
import { searchCity, updateSearchString } from './SearchBarActions';

const cityData = require('./CityData.json');

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch, searchString } = this.props;
    dispatch(searchCity(searchString));
  }

  handleChange(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchString(value));
  }

  handleClick(event) {
    const { dispatch } = this.props;
    dispatch(searchCity(event.target.name));
  }

  render() {
    const { searchString } = this.props;
    return (
      <div>
        {cityData.map(city => (
          <button
            className='btn btn-primary'
            key={ city.name }
            name={ city.name }
            onClick={ this.handleClick }
          >{city.name}
          </button>
        ))}
        <form onSubmit={ this.handleSubmit }>
          <div className='flex'>
            <input
              className='form-control'
              type='text'
              placeholder='Enter a City Name Here...'
              value={ searchString }
              onChange={ this.handleChange }
            />
            <button>Go!</button>
          </div>
        </form>
        <br />
      </div>
    );
  }
}
