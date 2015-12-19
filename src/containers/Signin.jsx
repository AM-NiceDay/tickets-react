import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions/user';

const SignIn = React.createClass({

  handleSignIn() {
    const { dispatch } = this.props;

    const phoneNumber = this.refs.phoneNumber.value;
    const password = this.refs.phoneNumber.value;

    dispatch(signIn({
      phoneNumber,
      password
    }));
  },

  render() {
    return <div>
      <input type="text" ref="phoneNumber" placeholder="Phone number" />
      <input type="text" ref="Password" placeholder="Password" />
      <button onClick={this.handleSignIn}>Sign In</button>
    </div>;
  }
});

export default connect()(SignIn);
