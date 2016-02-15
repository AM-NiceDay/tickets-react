import { GET_TICKET, BUY_TICKET } from '../actions/ticket';
import { Map, fromJS } from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
    case `${GET_TICKET}_SUCCESS`:
      return fromJS(action.payload);
    case `${BUY_TICKET}_LOADING`:
      return Map({
        busCode: action.payload,
        loading: true
      });
    case `${BUY_TICKET}_SUCCESS`:
      return fromJS(action.payload);
    case `${BUY_TICKET}_ERROR`:
      return fromJS(action.payload);
    default:
      return state;
  }
}
