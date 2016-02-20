import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { getUserInfo, signIn } from '../../actions/user';
import Form from '../../components/Form';

class SignInSecondStep extends Component {

  constructor(props) {
    super(props);

    this.signInHandler = this.signInHandler.bind(this);
  }

  componentDidMount() {
    const { dispatch, user } = this.props;

    dispatch(getUserInfo(user.phoneNumber));
  }

  signInHandler(password) {
    const { dispatch, user } = this.props;
    const { nextPathname = '/' } = user;

    dispatch(signIn(user.phoneNumber, password)).payload.promise
      .then(result => {
        if (!result.error) {
          dispatch(pushPath(nextPathname));
        }
      });
  }

  render() {
    const name = this.props.user.name;

    return (
      <Form
        inputLabel={`Здравствуйте, ${name ? name : ''}! Теперь введите свой пароль`}
        inputType="password"
        buttonText="Подтвердить"
        submitHandler={this.signInHandler}
      />
    );
  }
}

export default connect(state => ({
  user: state.user.toJS()
}))(SignInSecondStep);
