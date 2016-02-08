import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';
import localstorageEnhancer from './localstorageEnhancer';
import reducers from '../reducers/index';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  applyMiddleware(
    thunk
  ),
  localstorageEnhancer,
  DevTools.instrument()
);

export default function(initialState = {}) {
  const store = createStore(enableBatching(reducers), initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(enableBatching(require('../reducers')).default)
    );
  }

  return store;
}