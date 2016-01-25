import { applyMiddleware, createStore, compose } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'
import DevTools from '../containers/DevTools';
import { fromJS } from 'immutable';

const finalCreateStore = compose(
  applyMiddleware(
    thunk
  ),
  persistState('user', {
    serialize: (subset) => JSON.stringify(subset.user.toJS()),
    deserialize: (serializedData) => ({
      user: fromJS(JSON.parse(serializedData))
    }),
    merge: (initialState, persistedState) => {
      return Object.assign(initialState, persistedState);
    }
  }),
  DevTools.instrument()
)(createStore);

export default function(initialState = {}) {
  const store = finalCreateStore(reducers, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}