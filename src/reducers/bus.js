import { CHECK_BUS, UNCHECK_BUS } from '../actions/bus';
import { Map } from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
    case CHECK_BUS: {
      const { id, checked, exist, route } = action.payload;

      return {
        id,
        checked,
        exist,
        route
      };
    }
    case UNCHECK_BUS:
      return Map();
    default:
      return state;
  }
};
