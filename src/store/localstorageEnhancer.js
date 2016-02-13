import persistState from 'redux-localstorage';
import { fromJS } from 'immutable';

export default persistState('user', {
  serialize: (subset) => JSON.stringify(subset.user.toJS()),
  deserialize: (serializedData) => ({
    user: fromJS(JSON.parse(serializedData)).merge({
      loading: false
    })
  }),
  merge: (initialState, persistedState) => {
    return Object.assign(initialState, persistedState);
  }
});
