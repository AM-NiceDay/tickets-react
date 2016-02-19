import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { signUp } from '../../actions/user';

class SignInSecondStep extends Component {

  constructor(props) {
    super(props);

    this.signUpHandler = this.signUpHandler.bind(this);
  }

  signUpHandler(e) {
    e.preventDefault();

    const { dispatch, user } = this.props;
    const { phoneNumber, name, lastName, nextPathname = '/' } = user;
    const password = this.refs.password.value;

    dispatch(signUp(phoneNumber, name, lastName, password)).payload.promise
      .then(result => {
        if (!result.error) {
          dispatch(pushPath(nextPathname));
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.signUpHandler} >
        <p>Осталось еще чуть-чуть! Введите пароль</p>
        <p><input type="password" ref="password" /></p>
        <button type="submit">-></button>
      </form>
    );
  }
}

export default connect(state => ({
  user: state.user.toJS()
}))(SignInSecondStep);
