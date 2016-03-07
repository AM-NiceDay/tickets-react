import { SET_VERIFIABLE_TICKET, SET_VERIFIABLE_TICKET_ERROR, UNSET_VERIFIABLE_TICKET } from '../actions/ticket';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_VERIFIABLE_TICKET:
      return Object.assign({}, action.payload, { verified: true });
    case SET_VERIFIABLE_TICKET_ERROR:
      return { error: true };
    case UNSET_VERIFIABLE_TICKET:
      return { checked: false };
    default:
      return state;
  }
}
