import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import fetchMiddleware from '../middlewares/fetchMiddleware';
import persistState from 'redux-localstorage';
import reducers from '../reducers/index';

const enhancer = compose(
  applyMiddleware(
    thunk,
    fetchMiddleware(),
    promiseMiddleware({
      promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
    })
  ),
  //persistState('user'),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function(initialState = {}) {
  return createStore(reducers, initialState, enhancer);;
}