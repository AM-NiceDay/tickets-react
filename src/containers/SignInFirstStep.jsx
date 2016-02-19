import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { setPhoneNumber } from '../actions/user';

class SignInFirstStep extends Component {

  constructor(props) {
    super(props);

    this.nextStepHandler = this.nextStepHandler.bind(this);
  }

  nextStepHandler(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const phoneNumber = Number(this.refs.phoneNumber.value);

    dispatch(setPhoneNumber(phoneNumber));
    dispatch(pushPath('/signin/2'));
  }

  render() {
    return (
      <form onSubmit={this.nextStepHandler} >
        <p>Для начала введите свой мобильный номер</p>
        <p>
          +375
          <input type="text" ref="phoneNumber" />
        </p>
        <button type="submit">-></button>
      </form>
    );
  }
}

export default connect()(SignInFirstStep);
