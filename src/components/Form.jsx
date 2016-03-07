import React, { Component, PropTypes } from 'react';
import validate from '../utils/validate';

const propTypes = {
  inputLabel: PropTypes.string,
  inputPrefix: PropTypes.string,
  inputType: PropTypes.string,
  infoText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonDisabled: PropTypes.func,
  validator: PropTypes.func,
  inputHandler: PropTypes.func,
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: true,
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    this.validate();
  }

  submitHandler(e) {
    e.preventDefault();

    this.props.submitHandler(this.refs.value.value);
  }

  inputHandler() {
    if (!this.props.inputHandler) {
      return;
    }

    this.props.inputHandler(this.refs.value.value);
  }

  validate() {
    if (!this.props.validator) {
      return;
    }

    this.setState({
      valid: validate(this.refs.value.value, this.props.validator),
    });
  }

  render() {
    const {
      inputLabel,
      inputPrefix,
      inputType = 'text',
      infoText,
      buttonText,
      buttonDisabled,
    } = this.props;

    return (
      <form className="page-entry__form" onSubmit={this.submitHandler} onKeyUp={this.validate} >
        <p className="page-entry__description" >{inputLabel}</p>
        <p className="page-entry__input-prefix">
          {inputPrefix}
          <input
            className="page-entry__input"
            type={inputType}
            ref="value"
            onKeyUp={this.inputHandler}
          />
        </p>
        { infoText ? <p className="page-entry__extra-info">{infoText}</p> : null }
        <button
          className="button"
          type="submit"
          disabled={buttonDisabled || !this.state.valid}
          style={ buttonDisabled || !this.state.valid ? { color: 'gray' } : null}
        >
          {buttonText}
        </button>
      </form>
    );
  }
}

Form.propTypes = propTypes;

export default Form;
