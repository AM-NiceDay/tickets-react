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
      <div className="main">
          <div className="page-entry">
              <div className="page-entry__header">
                  <Link className="link-element page-entry__link-element" to="/signin">Войти</Link>
                  <span className="page-logo page-entry__logo">
                        <svg  width="24" height="24" viewBox="0 0 24 24">
                            <path d="M2,6H4V18H2V6M5,6H6V18H5V6M7,6H10V18H7V6M11,6H12V18H11V6M14,6H16V18H14V6M17,6H20V18H17V6M21,6H22V18H21V6Z" />
                        </svg>
                  </span>
              </div>
              {this.props.children}
          </div>
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
