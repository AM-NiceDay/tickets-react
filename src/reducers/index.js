import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import user from './user';
import bus from './bus';

export default combineReducers({
  user,
  bus,
  routing: routeReducer
});
