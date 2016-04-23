import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './user';
import draft from './user/draft';
import ticket from './ticket';
import bus from './bus';
import question from './question';
import tickets from './tickets';
import buses from './buses';
import news from './news';
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
  question,
  tickets,
  buses,
  news,
  busTickets,
  verifiableTicket,
  sideBar,
  routing,
});
