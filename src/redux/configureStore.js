import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import checkReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  checkReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
