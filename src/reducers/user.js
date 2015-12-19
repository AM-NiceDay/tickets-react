import { SIGN_IN } from '../actions/user';
import { Map, fromJS } from 'immutable';

export default function(state = Map(), action) {
  switch(action.type) {
    case SIGN_IN: {
      const {phoneNumber} = action.payload;

      return Map({
        loggedIn: true,
        phoneNumber
      });
    }
    default:
      return state;
  }
}
