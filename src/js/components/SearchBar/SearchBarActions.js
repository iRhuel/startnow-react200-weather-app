const axios = require('axios');

function updateSearchString(searchString) {
  return {
    type: 'UPDATE_SEARCH_STRING',
    payload: { searchString }
  };
}

function searchCity(searchString) {
  return [
    {
      type: 'SEARCH_CITY',
      payload: axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${searchString}&units=imperial&APPID=044edfd2c3013cc272459ed9b74dd9eb`)
        .then(response => response.data)
    },
    {
      type: 'ADD_HISTORY_ITEM',
      payload: {
        searchString,
        searchTime: new Date()
      }
    }
  ];
}

export { updateSearchString, searchCity };
