import { setNextPathname } from '../actions/user';
import R from 'ramda';

export default function (store) {
  return {
    requireAuth: (nextState, replaceState) => {
      const user = store.getState().user.index;
      if (!user.loggedIn) {
        store.dispatch(setNextPathname(nextState.location.pathname));
        replaceState({}, '/signin');
      }
    },
    requireController: (nextState, replaceState) => {
      const user = store.getState().user.index;
      if (!user.role && user.role !== 'controller') {
        store.dispatch(setNextPathname(nextState.location.pathname));
        replaceState({}, '/signin');
      }
    },
    requireTicket: (nextState, replaceState) => {
      const ticket = store.getState().ticket.toJS();
      if (R.isEmpty(ticket)) {
        replaceState({}, '/ticket');
      }
    },
  };
}
