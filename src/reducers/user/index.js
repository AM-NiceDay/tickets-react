import {
  SET_PHONE_NUMBER,
  SET_NAME,
  SET_LAST_NAME,
  GET_USER_INFO,
  SIGN_IN,
  SIGN_UP,
  LOGOUT,
  SET_NEXT_PATHNAME
} from '../../actions/user';

export default function(state = {}, action) {
  switch(action.type) {
    case `${GET_USER_INFO}_LOADING`:
      return Object.assign({}, {
        loading: true
      });
    case `${GET_USER_INFO}_SUCCESS`:
      return Object.assign({}, {
        ...action.payload.user,
        loading: false
      });
    case `${SIGN_IN}_LOADING`:
    case `${SIGN_UP}_LOADING`:
      return Object.assign({}, {
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
    case SET_NEXT_PATHNAME:
      return state.merge({
        nextPathname: action.payload.nextPathname
      });
    default:
      return state;
  }
}
