import { SET_PHONE_NUMBER, SET_NAME, SET_LAST_NAME, SET_PASSWORD, CLEAN_DRAFT } from '../../actions/user';

const initialState = {
  phoneNumber: '',
  name: '',
  lastName: '',
  password: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case CLEAN_DRAFT:
      return initialState;
    default:
      return state;
  }
}
