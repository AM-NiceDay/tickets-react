import { SIGN_IN, SIGN_UP, LOGOUT } from '../actions/user';
import { Map, fromJS } from 'immutable';

export default function(state = Map(), action) {
  switch(action.type) {
    case SIGN_IN:
    case SIGN_UP: {
      switch(action.meta.status) {
        case 'REQUEST':
          return fromJS(action.payload);
        case 'SUCCESS':
          return fromJS(action.payload.user).merge({
            token: action.payload.token,
            loggedIn: true
          });
      }

      break;
    }
    case LOGOUT:
      return Map();
    default:
      return state;
  }
}
