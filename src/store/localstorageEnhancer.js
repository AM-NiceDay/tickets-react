import persistState from 'redux-localstorage';

export default persistState('user', {
  serialize: (subset) => JSON.stringify(subset.user.toJS()),
  deserialize: (serializedData) => ({
    user: fromJS(JSON.parse(serializedData))
  }),
  merge: (initialState, persistedState) => {
    return Object.assign(initialState, persistedState);
  }
});
