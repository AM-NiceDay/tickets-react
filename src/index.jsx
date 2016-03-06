import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from './store/configureStore';
import _ from 'lodash';
import history from './history';
import routes from './routes';
import { setNextPathname } from './actions/user';
import { init } from './utils/fetch';

import './styles/main.scss';

const store = configureStore();
syncReduxAndRouter(history, store);
init(store);

function requireAuth(nextState, replaceState) {
  const user = store.getState().user;
  if (!user.get('loggedIn')) {
    store.dispatch(setNextPathname(nextState.location.pathname));
    replaceState({}, '/signin');
  }
}

function requireController(nextState, replaceState) {
  const user = store.getState().user;
  if (!user.get('role') && user.get('role') != 'controller') {
    store.dispatch(setNextPathname(nextState.location.pathname));
    replaceState({}, '/signin');
  }
}

function requireTicket(nextState, replaceState) {
  const ticket = store.getState().ticket.toJS();
  if (_.isEmpty(ticket)) {
    replaceState({}, '/ticket');
  }
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={ history } routes={ routes(requireAuth, requireController, requireTicket) } />
    </div>
  </Provider>,
  document.getElementById('app'));
