/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import cryptosReducer from './cryptos/cryptos';

const store = createStore(
  cryptosReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
