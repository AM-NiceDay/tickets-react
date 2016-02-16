import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import localstorageEnhancer from './localstorageEnhancer';
import reducers from '../reducers/index';

const enhancer = compose(
  applyMiddleware(
    thunk,
    promiseMiddleware({
      promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
    })
  ),
  localstorageEnhancer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function(initialState = {}) {
  return createStore(reducers, initialState, enhancer);;
}