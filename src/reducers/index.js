import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './user';
import draft from './user/draft';
import lastTicket from './lastTicket';
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
  lastTicket,
  tickets,
  buses,
  busTickets,
  verifiableTicket,
  sideBar,
  routing,
});
