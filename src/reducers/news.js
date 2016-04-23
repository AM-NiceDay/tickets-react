import { GET_NEWS } from '../actions/news';
import fp from 'lodash/fp';

export default function (state = {}, action) {
  switch (action.type) {
    case `${GET_NEWS}_SUCCESS`:
      return {
        ...state,
        ...fp.keyBy('_id', action.payload),
      };
    default:
      return state;
  }
}
