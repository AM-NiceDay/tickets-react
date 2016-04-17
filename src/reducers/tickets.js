import { GET_TICKET, BUY_TICKET } from '../actions/ticket';

export default function (state = {}, action) {
  switch (action.type) {
    case `${GET_TICKET}_SUCCESS`: {
      const ticket = {
        ...action.payload[0],
        bus: action.payload[0].bus._id,
      };

      return {
        ...state,
        [ticket._id]: ticket,
      };
    }
    case `${BUY_TICKET}_SUCCESS`: {
      const ticket = {
        ...action.payload,
        bus: action.payload.bus._id,
      };

      return {
        ...state,
        [ticket._id]: ticket,
      };
    }
    default:
      return state;
  }
}
