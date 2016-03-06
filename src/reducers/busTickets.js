import { GET_BUS_TICKETS } from '../actions/ticket';

export default function (state = [], action) {
  switch (action.type) {
    case `${GET_BUS_TICKETS}_SUCCESS`:
      return action.payload;
    default:
      return state;
  }
}