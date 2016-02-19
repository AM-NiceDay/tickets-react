import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { signUp } from '../../actions/user';
import { pushPath } from 'redux-simple-router';
import { Link } from 'react-router';

const SignUp = React.createClass({

  handleSignUp() {
    const { dispatch, nextPathname = '/' } = this.props;
    const { name, phoneNumber, email, password } = _.mapValues(this.refs, 'value');

    dispatch(signUp({
      name,
      phoneNumber,
      email,
      password
    })).payload.promise
      .then(result => {
        if (!result.error) {
          dispatch(pushPath(nextPathname));
        }
      });
  },

  render() {
    return (
      <div>
        <Link to="/signin">Войти</Link>
        {this.props.children}
      </div>
    );

    return this.props.user.loading ?
      <span>Loading</span> :
      <div>
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
  const nextPathname = routingState ? routingState.nextPathname : undefined;

  return {
    nextPathname,
    user: state.user.toJS()
  };
})(SignUp);
