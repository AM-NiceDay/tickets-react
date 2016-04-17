import { setNextPathname } from '../actions/user';
import _ from 'lodash';

export function combineRequires(require1, require2) {
  return (nextState, replaceState) => {
    require1(nextState, replaceState);
    require2(nextState, replaceState);
  };
}

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
      const ticket = store.getState().ticket;

      if (!ticket.id) {
        replaceState({}, '/ticket');
      }
    },
    requireBus: (nextState, replaceState) => {
      const bus = store.getState().bus;

      if (bus.code.length !== 4) {
        replaceState({}, '/verify');
      }
    },
    redirectBasedOnUserType: (nextState, replaceState) => {
      const user = store.getState().user.index;
      if (user.role && user.role === 'controller') {
        store.dispatch(setNextPathname(nextState.location.pathname));
        replaceState({}, '/verify');
      } else {
        replaceState({}, '/ticket');
      }
    },
  };
}
