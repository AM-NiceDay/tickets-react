import { BUY_TICKET } from '../actions/ticket';
import { Map, fromJS } from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
    case BUY_TICKET: {
      const { busCode } = action.payload;

      switch(action.meta.status) {
        case 'REQUEST':
          return Map({
            busCode,
            isFetching: true
          });
        case 'SUCCESS':
          return fromJS(action.payload);
      }

      break;
    }
    default:
      return state;
  }
}
