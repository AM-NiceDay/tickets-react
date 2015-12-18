import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Index from './containers/Index';

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
    </Route>
  </Router>,
  document.getElementById('app'));
