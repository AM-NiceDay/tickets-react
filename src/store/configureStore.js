import { applyMiddleware, createStore, compose } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import { enableBatching } from 'redux-batched-actions';
import DevTools from '../containers/DevTools';
import pushPathMiddleware from '../middlewares/pushPathMiddleware';
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
  const store = finalCreateStore(enableBatching(reducers), initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(enableBatching(require('../reducers')).default)
    );
  }

  return store;
}