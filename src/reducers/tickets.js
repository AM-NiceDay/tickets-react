import fp from 'lodash/fp';
import { GET_TICKET, BUY_TICKET, GET_BUS_TICKETS } from '../actions/ticket';
import { formatBusCode } from '../helpers/busCodeHelper';

export default function (state = {}, action) {
  switch (action.type) {
    case `${GET_TICKET}_SUCCESS`: {
      const ticket = {
        ...action.payload[0],
        bus: formatBusCode(action.payload[0].bus.cityId, action.payload[0].bus._id),
      };

      return {
        ...state,
        [ticket._id]: ticket,
      };
    }
    case `${BUY_TICKET}_SUCCESS`: {
      const ticket = {
        ...action.payload,
        bus: formatBusCode(action.payload.bus.cityId, action.payload.bus._id),
      };

      return {
        ...state,
        [ticket._id]: ticket,
      };
    }
    case `${GET_BUS_TICKETS}_SUCCESS`:
      return {
        ...state,
        ...fp.keyBy('_id', action.payload),
      };
    default:
      return state;
  }
}
