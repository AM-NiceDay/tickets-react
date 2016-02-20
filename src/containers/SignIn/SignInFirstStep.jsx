import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { setPhoneNumber } from '../../actions/user';
import Form from '../../components/Form';

class SignInFirstStep extends Component {

  constructor(props) {
    super(props);

    this.nextStepHandler = this.nextStepHandler.bind(this);
  }

  nextStepHandler(phoneNumber) {
    const { dispatch } = this.props;

    dispatch(setPhoneNumber(Number(phoneNumber)));
    dispatch(pushPath('/signin/2'));
  }

  render() {
    return (
      <Form
        inputLabel="Для начала введите свой мобильный номер"
        inputPrefix="+375"
        buttonText="->"
        submitHandler={this.nextStepHandler}
      />
    );
  }
}

export default connect()(SignInFirstStep);
