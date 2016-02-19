import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { getUserInfo, signIn } from '../actions/user';

class SignInSecondStep extends Component {

  constructor(props) {
    super(props);

    this.signInHandler = this.signInHandler.bind(this);
  }

  componentDidMount() {
    const { dispatch, user } = this.props;

    dispatch(getUserInfo(user.phoneNumber));
  }

  signInHandler(e) {
    e.preventDefault();

    const { dispatch, user, nextPathname = '/' } = this.props;
    const password = this.refs.password.value;

    dispatch(signIn(user.phoneNumber, password)).payload.promise
      .then(result => {
        if (!result.error) {
          dispatch(pushPath(nextPathname));
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.signInHandler} >
        <p>Здравствуйте, {this.props.user.name}! Теперь введите свой пароль</p>
        <p><input type="password" ref="password" /></p>
        <button type="submit">Подтвердить</button>
      </form>
    );
  }
}

export default connect(state => {
  const routingState = state.routing.state;
  const nextPathname = routingState ? routingState.nextPathname : undefined;

  return {
    nextPathname,
    user: state.user.toJS()
  };
})(SignInSecondStep);
