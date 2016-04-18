import { GET_TICKET, BUY_TICKET } from '../actions/ticket';
import { CHECK_BUS } from '../actions/bus';
import { formatBusCode } from '../helpers/busCodeHelper';

export default function (state = {}, action) {
  switch (action.type) {
    case `${GET_TICKET}_SUCCESS`: {
      const bus = action.payload[0].bus;
      const busCode = formatBusCode(bus.cityId, bus._id);

      return {
        ...state,
        [busCode]: bus,
      };
    }
    case `${CHECK_BUS}_SUCCESS`: {
      const bus = action.payload;
      const busCode = formatBusCode(bus.cityId, bus._id);

      return {
        ...state,
        [busCode]: bus,
      };
    }
    case `${BUY_TICKET}_SUCCESS`: {
      const bus = action.payload;
      const busCode = formatBusCode(bus.cityId, bus._id);

      return {
        ...state,
        [busCode]: bus,
      };
    }
    default:
      return state;
  }
}
