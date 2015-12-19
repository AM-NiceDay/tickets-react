import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions/user';
import { pushPath } from 'redux-simple-router';

const SignIn = React.createClass({

  handleSignIn() {
    const { dispatch } = this.props;
    const nextPathname = this.props.nextPathname || '/';

    const phoneNumber = this.refs.phoneNumber.value;
    const password = this.refs.phoneNumber.value;

    dispatch(signIn({
      phoneNumber,
      password
    }));

    dispatch(pushPath(nextPathname));
  },

  render() {
    return <div>
      <input type="text" ref="phoneNumber" placeholder="Phone number" />
      <input type="text" ref="Password" placeholder="Password" />
      <button onClick={this.handleSignIn}>Sign In</button>
    </div>;
  }
});

export default connect(state => {
  const routingState = state.routing.state;

  if (routingState) {
    return {
      nextPathname: routingState.nextPathname
    }
  }

  return {};
})(SignIn);
