import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { setName } from '../../actions/user';

class SignInFirstStep extends Component {

  constructor(props) {
    super(props);

    this.nextStepHandler = this.nextStepHandler.bind(this);
  }

  nextStepHandler(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const name = this.refs.name.value;

    dispatch(setName(name));
    dispatch(pushPath('/signup/3'));
  }

  render() {
    return (
      <form onSubmit={this.nextStepHandler} >
        <p>Введите свое Имя</p>
        <p>
          <input type="text" ref="name" />
        </p>
        <p>Пожалуйста, вводите реальные данные</p>
        <button type="submit">-></button>
      </form>
    );
  }
}

export default connect()(SignInFirstStep);
