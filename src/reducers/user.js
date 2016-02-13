import { SIGN_IN, SIGN_UP, LOGOUT } from '../actions/user';
import { Map, fromJS } from 'immutable';

export default function(state = Map(), action) {
  switch(action.type) {
    case `${SIGN_IN}_LOADING`:
    case `${SIGN_UP}_LOADING`:
      return fromJS(action.payload).merge({
        loading: true
      });
    case `${SIGN_IN}_SUCCESS`:
    case `${SIGN_UP}_SUCCESS`:
      return fromJS(action.payload.user).merge({
        token: action.payload.token,
        loggedIn: true,
        loading: false
      });
    case `${SIGN_IN}_ERROR`:
    case `${SIGN_UP}_ERROR`:
      return Map({
        error: true,
        loading: false
      });
    case LOGOUT:
      return Map();
    default:
      return state;
  }
}
