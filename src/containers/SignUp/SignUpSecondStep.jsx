import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { setName } from '../../actions/user';
import Form from '../../components/Form';

class SignInFirstStep extends Component {

  constructor(props) {
    super(props);

    this.nextStepHandler = this.nextStepHandler.bind(this);
  }

  nextStepHandler(name) {
    const { dispatch } = this.props;

    dispatch(setName(name));
    dispatch(pushPath('/signup/3'));
  }

  render() {
    return (
      <Form
        inputLabel="Введите свое Имя"
        buttonText="->"
        infoText="Пожалуйста, вводите реальные данные"
        submitHandler={this.nextStepHandler}
      />
    );
  }
}

export default connect()(SignInFirstStep);
