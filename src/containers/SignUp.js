import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/user';
import { pushPath } from 'redux-simple-router';

const SignUp = React.createClass({

  handleSignUp() {
    const { dispatch } = this.props;
    const nextPathname = this.props.nextPathname || '/';

    const name = this.refs.name.value;
    const phoneNumber = this.refs.phoneNumber.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    dispatch(signUp({
      name,
      phoneNumber,
      email,
      password
    }));

    dispatch(pushPath(nextPathname));
  },

  render() {
    return <div>
      <input type="text" ref="name" placeholder="Name" />
      <input type="text" ref="phoneNumber" placeholder="Phone number" />
      <input type="text" ref="email" placeholder="Email" />
      <input type="text" ref="password" placeholder="Password" />
      <button onClick={ this.handleSignUp }>Sign Up</button>
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
})(SignUp);
