import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './user';
import draft from './user/draft';
import ticket from './ticket';
import bus from './bus';
import tickets from './tickets';
import buses from './buses';
import busTickets from './busTickets';
import sideBar from './sideBar';
import verifiableTicket from './verifiableTicket';

export default combineReducers({
  user: combineReducers({
    index: user,
    draft,
  }),
  ticket,
  bus,
  tickets,
  buses,
  busTickets,
  verifiableTicket,
  sideBar,
  routing,
});
