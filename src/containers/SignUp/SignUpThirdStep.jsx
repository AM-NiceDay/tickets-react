import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { setLastName } from '../../actions/user';
import Form from '../../components/Form';

class SignInFirstStep extends Component {

  constructor(props) {
    super(props);

    this.nextStepHandler = this.nextStepHandler.bind(this);
  }

  nextStepHandler(lastName) {
    const { dispatch } = this.props;

    dispatch(setLastName(lastName));
    dispatch(pushPath('/signup/4'));
  }

  render() {
    return (
      <Form
        inputLabel="Введите свою Фамилию"
        buttonText="->"
        infoText="Пожалуйста, вводите реальные данные"
        submitHandler={this.nextStepHandler}
      />
    );
  }
}

export default connect()(SignInFirstStep);
