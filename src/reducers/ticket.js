import { BUY_TICKET } from '../actions/ticket';
import { Map } from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
    case BUY_TICKET: {
      const { busId, dateCreated } = action.payload;

      return Map({
        busId,
        dateCreated
      });
    }
    default:
      return state;
  }
}
