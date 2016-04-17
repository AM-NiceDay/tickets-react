import { SET_QUESTION_TEXT, SET_QUESTION_REACTION, RESET_QUESTION } from '../actions/question';

const initialState = {
  text: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_QUESTION_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case SET_QUESTION_REACTION:
      return {
        ...state,
        reaction: action.payload,
      };
    case RESET_QUESTION:
      return initialState;
    default:
      return state;
  }
}
