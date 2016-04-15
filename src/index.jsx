import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';

import './styles/main.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);

