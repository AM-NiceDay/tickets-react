import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import history from './history';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';
import App from './containers/App';
import Index from './containers/Index';
import SignIn from './containers/SignIn';
import BuyTicket from './containers/BuyTicket';

const store = configureStore();
syncReduxAndRouter(history, store);

function requireAuth(nextState, replaceState) {
  const user = store.getState().user;
  if (!user.get('loggedIn')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/signin');
  }
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Index} />
          <Route path="signin" component={SignIn} />
          <Route path="buy" component={BuyTicket} onEnter={requireAuth} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app'));
