import { SET_PHONE_NUMBER, SET_NAME, SET_LAST_NAME } from '../../actions/user';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return Object.assign({}, state, { phoneNumber: action.payload });
    case SET_NAME:
      return Object.assign({}, state, { name: action.payload });
    case SET_LAST_NAME:
      return Object.assign({}, state, { lastName: action.payload });
    default:
      return state;
  }
}
