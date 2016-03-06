import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import user from './user';
import bus from './bus';
import ticket from './ticket';
import busTickets from './busTickets';

export default combineReducers({
  user,
  bus,
  ticket,
  busTickets,
  routing: routeReducer
});
