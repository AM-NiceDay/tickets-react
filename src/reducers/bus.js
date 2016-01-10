import { CHECK_BUS, UNCHECK_BUS } from '../actions/bus';
import { Map, fromJS } from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
    case CHECK_BUS: {
      switch(action.meta.status) {
        case 'REQUEST':
          return Map({
            isFetching: true
          });
        case 'SUCCESS':
          return fromJS(action.payload).merge({
            checked: true,
            exist: true
          });
        case 'FAILURE':
          return Map({
            checked: true,
            exist: false
          });
      }

      break;
    }
    case UNCHECK_BUS:
      return Map();
    default:
      return state;
  }
};
