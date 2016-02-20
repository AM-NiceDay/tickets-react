import React, { Component } from 'react';

export default class Form extends Component {

  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();

    const value = this.refs.value.value;

    this.props.submitHandler(value);
  }

  inputHandler() {
    const value = this.refs.value.value;

    if (!this.props.inputHandler) {
      return;
    }

    this.props.inputHandler(value);
  }

  render() {
    const { inputLabel, inputPrefix, inputType = 'text', infoText, buttonText, buttonDisabled } = this.props;

    return (
      <form onSubmit={this.submitHandler} >
        <p>{inputLabel}</p>
        <p>{inputPrefix}<input type={inputType} ref="value" onKeyUp={this.inputHandler} /></p>
        { infoText ? <p>{infoText}</p> : null }
        <button type="submit" disabled={buttonDisabled}>{buttonText}</button>
      </form>
    );
  }
}