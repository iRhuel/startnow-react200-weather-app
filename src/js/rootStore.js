import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import multi from 'redux-multi';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware(),
      multi
    )));

export default rootStore;
