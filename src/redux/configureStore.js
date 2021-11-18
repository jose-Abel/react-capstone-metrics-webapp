import {
  createStore, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import cryptosReducer from './cryptos/cryptos';

const store = createStore(
  cryptosReducer,
  applyMiddleware(thunk),
);

export default store;
