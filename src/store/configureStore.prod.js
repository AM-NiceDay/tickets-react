import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import api from '../middlewares/api';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, api(), routerMiddleware(browserHistory)),
      persistState('user')
    )
  );
}
