import { CHECK_BUS, UNCHECK_BUS, SET_BUS_CODE } from '../actions/bus';

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
        id: indefined,
        isChecked: true,
      };
    case UNCHECK_BUS:
      return {
        ...state,
        isChecked: false,
      };
    case SET_BUS_CODE: {
      return {
        ...state,
        code: action.payload,
      };
    }
    default:
      return state;
  }
};
