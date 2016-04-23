import { createAction } from 'redux-actions';

export const GET_NEWS = 'GET_NEWS';

export function getNews() {
  return {
    type: GET_NEWS,
    payload: {
      url: '/news',
    },
  };
}
