import { GET_TICKET, BUY_TICKET } from '../actions/ticket';
import { CHECK_BUS } from '../actions/bus';

export default function (state = {}, action) {
  switch (action.type) {
    case `${GET_TICKET}_SUCCESS`:
      return {
        ...state,
        [action.payload[0].bus._id]: action.payload[0].bus,
      };
    case `${CHECK_BUS}_SUCCESS`:
      return {
        ...state,
        [action.payload._id]: action.payload,
      };
    case `${BUY_TICKET}_SUCCESS`:
      return {
        ...state,
        [action.payload.bus._id]: action.payload.bus,
      };
    default:
      return state;
  }
}
