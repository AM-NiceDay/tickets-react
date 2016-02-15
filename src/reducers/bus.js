import { CHECK_BUS, UNCHECK_BUS } from '../actions/bus';
import { Map, fromJS } from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
    case `${CHECK_BUS}_LOADING`:
      return Map({
        loading: true,
        checked: false
      });
    case `${CHECK_BUS}_SUCCESS`:
      return fromJS(action.payload).merge({
        checked: true,
        exist: true
      });
    case `${CHECK_BUS}_ERROR`:
      return Map({
        checked: true,
        exist: false
      });
    case UNCHECK_BUS:
      return state.merge({
        checked: false
      });
    default:
      return state;
  }
};
