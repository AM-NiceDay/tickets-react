import { createAction } from 'redux-actions';

export const SET_QUESTION_TEXT = 'SET_QUESTION_TEXT';
export const SET_QUESTION_REACTION = 'SET_QUESTION_REACTION';
export const RESET_QUESTION = 'RESET_QUESTION';
export const SEND_QUESTION = 'SEND_HELP_QUESTION';

export const setQuestionText = createAction(SET_QUESTION_TEXT);
export const setQuestionReaction = createAction(SET_QUESTION_REACTION);
export const resetQuestion = createAction(RESET_QUESTION);

export function sendQuestion(type, text, reaction = 'neutral', params) {
  return {
    type: SEND_QUESTION,
    payload: {
      url: '/questions',
      method: 'post',
      body: {
        type,
        text,
        reaction,
        ...params,
      },
    },
  };
}
