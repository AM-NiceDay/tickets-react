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
      <form className="page-entry__form" onSubmit={this.submitHandler} >
        <p className="page-entry__description" >{inputLabel}</p>
        <p className="page-entry__input-prefix">{inputPrefix}<input className="page-entry__input" type={inputType} ref="value" onKeyUp={this.inputHandler} /></p>
        { infoText ? <p className="page-entry__extra-info">{infoText}</p> : null }
        <button className="button" type="submit" disabled={buttonDisabled}>{buttonText}</button>
      </form>
    );
  }
}