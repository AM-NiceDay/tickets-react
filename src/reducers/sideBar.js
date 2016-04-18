import { SHOW_SIDE_BAR, HIDE_SIDE_BAR } from '../actions/sideBar';

export default function (state = false, action) {
  switch (action.type) {
    case SHOW_SIDE_BAR:
      return true;
    case HIDE_SIDE_BAR:
      return false;
    default:
      return state;
  }
}
