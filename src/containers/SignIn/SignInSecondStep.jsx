import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { getUserInfo, signIn } from '../../actions/user';
import Form from '../../components/Form';
import Spinner from '../../components/Spinner';

class SignInSecondStep extends Component {

  constructor(props) {
    super(props);

    this.signInHandler = this.signInHandler.bind(this);
  }

  componentDidMount() {
    const { dispatch, user, draft } = this.props;

    dispatch(getUserInfo(draft.phoneNumber));
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

    return this.props.user.loading ?
      <Spinner /> :
      <Form
        inputLabel={`Здравствуйте, ${name ? name : ''}! Теперь введите свой пароль`}
        inputType="password"
        buttonText="Подтвердить"
        submitHandler={this.signInHandler}
      />;
  }
}

export default connect(state => ({
  user: state.user.index,
  draft: state.user.draft,
}))(SignInSecondStep);
