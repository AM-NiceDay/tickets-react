import { pushPath } from 'redux-simple-router';

export default function pushPathMiddleware({ dispatch }) {
  return next => action => {
    if (action && action.meta && action.meta.path) {
      dispatch(pushPath(action.meta.path));
    }

    next(action);
  };
}
