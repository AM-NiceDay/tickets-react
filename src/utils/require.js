import { setNextPathname } from '../actions/user';
import _ from 'lodash';

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
      const lastTicket = store.getState().lastTicket;

      if (!lastTicket.id) {
        replaceState({}, '/ticket');
      }
    },
  };
}
