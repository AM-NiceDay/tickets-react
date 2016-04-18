import {
  GET_TICKET,
  BUY_TICKET,
  SET_TICKET_ID,
  SET_IS_CHECKED,
  RESET_TICKET
} from '../actions/ticket';

const initialState = {
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${GET_TICKET}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_TICKET}_SUCCESS`:
      return {
        ...state,
        id: action.payload[0]._id,
        isLoading: false,
      };
    case `${GET_TICKET}_ERROR`:
      return {
        ...state,
        id: undefined,
        isLoading: false,
      };
    case `${BUY_TICKET}_SUCCESS`:
      return {
        ...state,
        id: action.payload._id,
        isLoading: false,
      };
    case SET_TICKET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case SET_IS_CHECKED:
      return {
        ...state,
        isChecked: true,
      };
    case RESET_TICKET:
      return initialState;
    default:
      return state;
  }
}
