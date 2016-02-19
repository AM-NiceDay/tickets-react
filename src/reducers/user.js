import { SET_PHONE_NUMBER, GET_USER_INFO, SIGN_IN, SIGN_UP, LOGOUT } from '../actions/user';
import { Map, fromJS } from 'immutable';
import R from 'ramda';

export default function(state = Map(), action) {
  switch(action.type) {
    case SET_PHONE_NUMBER:
      return state.merge({
        phoneNumber: action.payload.phoneNumber
      });
    case `${GET_USER_INFO}_LOADING`:
      return state.merge({
        loading: true
      });
    case `${GET_USER_INFO}_SUCCESS`:
      return state.merge({
        ...action.payload.user,
        loading: false
      });
    case `${SIGN_IN}_LOADING`:
    case `${SIGN_UP}_LOADING`:
      return state.merge({
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
