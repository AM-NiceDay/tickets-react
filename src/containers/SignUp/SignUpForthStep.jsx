import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { signUp } from '../../actions/user';
import Form from '../../components/Form';

class SignInSecondStep extends Component {

  constructor(props) {
    super(props);

    this.signUpHandler = this.signUpHandler.bind(this);
  }

  signUpHandler(password) {
    const { dispatch, user } = this.props;
    const { phoneNumber, name, lastName, nextPathname = '/' } = user;

    dispatch(signUp(phoneNumber, name, lastName, password)).payload.promise
      .then(result => {
        if (!result.error) {
          dispatch(pushPath(nextPathname));
        }
      });
  }

  render() {
    return (
      <Form
        inputLabel="Осталось еще чуть-чуть! Введите пароль"
        inputType="password"
        buttonText="→"
        submitHandler={this.signUpHandler}
      />
    );
  }
}

export default connect(state => ({
  user: state.user.toJS()
}))(SignInSecondStep);
