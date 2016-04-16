import { GET_TICKET } from '../actions/ticket';

export default function (state = {}, action) {
  switch (action.type) {
    case `${GET_TICKET}_SUCCESS`:
      return {
        ...state,
        [action.payload[0].bus._id]: action.payload[0].bus,
      };
    default:
      return state;
  }
}
