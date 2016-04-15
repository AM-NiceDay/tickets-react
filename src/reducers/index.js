import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './user';
import draft from './user/draft';
import bus from './bus';
import ticket from './ticket';
import busTickets from './busTickets';
import verifiableTicket from './verifiableTicket';

export default combineReducers({
  user: combineReducers({
    index: user,
    draft,
  }),
  bus,
  ticket,
  busTickets,
  verifiableTicket,
  routing,
});
