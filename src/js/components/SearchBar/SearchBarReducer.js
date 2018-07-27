const defaultState = {
  searchString: '',
  searchResult: {
    name: '',
    coord: { lat: 0, lon: 0 },
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0
    },
    wind: { speed: 0 },
    sys: {
      country: null
    }
  },
  searchHistory: []
};

export default function searchBarReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_STRING':
      return {
        ...state,
        searchString: payload.searchString
      };

    case 'ADD_HISTORY_ITEM':
      return {
        ...state,
        searchHistory: [...state.searchHistory, payload]
      };

    case 'SEARCH_CITY_FULFILLED':
      return {
        ...state,
        searchResult: payload
      };

    case 'SEARCH_CITY_REJECTED':
      return state;

    default:
      return state;
  }
}
