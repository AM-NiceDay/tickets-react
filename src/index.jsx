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

const store = configureStore();
syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Index} />
          <Route path="signin" component={SignIn} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app'));
