import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import history from './history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import App from './containers/App';
import Index from './containers/Index';
import SignIn from './containers/SignIn';
import reducers from './reducers/index';

const store = createStore(reducers);

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="signin" component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));
