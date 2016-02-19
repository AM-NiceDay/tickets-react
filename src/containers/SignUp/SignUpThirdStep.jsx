import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { setLastName } from '../../actions/user';

class SignInFirstStep extends Component {

  constructor(props) {
    super(props);

    this.nextStepHandler = this.nextStepHandler.bind(this);
  }

  nextStepHandler(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const lastName = this.refs.lastName.value;

    dispatch(setLastName(lastName));
    dispatch(pushPath('/signup/4'));
  }

  render() {
    return (
      <form onSubmit={this.nextStepHandler} >
        <p>Введите свою Фамилию</p>
        <p>
          <input type="text" ref="lastName" />
        </p>
        <p>Пожалуйста, вводите реальные данные</p>
        <button type="submit">-></button>
      </form>
    );
  }
}

export default connect()(SignInFirstStep);
