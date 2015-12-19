import { createStore, compose } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../containers/DevTools';

const finalCreateStore = compose(
  DevTools.instrument()
)(createStore);

export default function(initialState) {
  const store = finalCreateStore(reducers, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}