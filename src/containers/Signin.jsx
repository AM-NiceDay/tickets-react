import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { signIn } from '../actions/user';
import { pushPath } from 'redux-simple-router';

const SignIn = React.createClass({

  handleSignIn() {
    const { dispatch, nextPathname = '/' } = this.props;
    const { phoneNumber, password } = _.mapValues(this.refs, 'value');

    dispatch(signIn({
      phoneNumber,
      password
    })).payload.promise
      .then(result => {
        if (!result.error) {
          dispatch(pushPath(nextPathname));
        }
      });
  },

  render() {
    return this.props.user.loading ?
      <span>Loading</span> :
      <div>
        <input type="text" ref="phoneNumber" placeholder="Phone number" />
        <input type="text" ref="password" placeholder="Password" />
        <button onClick={ this.handleSignIn }>Sign In</button>
      </div>;
  }
});

export default connect(state => {
  const routingState = state.routing.state;
  const nextPathname = routingState ? routingState.nextPathname : undefined;

  return {
    nextPathname,
    user: state.user.toJS()
  };
})(SignIn);
