import { CHECK_BUS, UNCHECK_BUS, SET_BUS_CODE, RESET_BUS } from '../actions/bus';
import { BUY_TICKET } from '../actions/ticket';

const initialState = {
  code: '',
  isChecked: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${CHECK_BUS}_LOADING`:
      return {
        ...state,
        isLoading: true,
        isChecked: false,
      };
    case `${CHECK_BUS}_SUCCESS`:
      return {
        ...state,
        id: action.payload._id,
        isChecked: true,
      };
    case `${CHECK_BUS}_ERROR`:
      return {
        ...state,
        id: undefined,
        isChecked: true,
      };
    case UNCHECK_BUS:
      return {
        ...state,
        isChecked: false,
      };
    case SET_BUS_CODE:
      return {
        ...state,
        code: action.payload,
      };
    case `${BUY_TICKET}_SUCCESS`:
      return initialState;
    case RESET_BUS:
      return initialState;
    default:
      return state;
  }
};
