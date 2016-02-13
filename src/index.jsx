import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from './store/configureStore';
import history from './history';
import routes from './routes';
import DevTools from './containers/DevTools';
import { init } from './utils/fetch';

const store = configureStore();
syncReduxAndRouter(history, store);
init(store);

function requireAuth(nextState, replaceState) {
  const user = store.getState().user;
  if (!user.get('loggedIn')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/signin');
  }
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={ history } routes={ routes(requireAuth) } />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app'));
