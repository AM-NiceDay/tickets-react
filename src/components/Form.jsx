import React, { PropTypes } from 'react';
import cs from 'classnames';
import withValue from '../utils/withValue';

const propTypes = {
  inputLabel: PropTypes.string.isRequired,
  inputPrefix: PropTypes.string,
  inputType: PropTypes.string,
  infoText: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
};

function Form({
  inputLabel,
  inputPrefix,
  inputType,
  infoText,
  buttonText,
  value,
  onChange,
  onSubmit,
  isValid,
}) {
  return (
    <div className="page-entry__form">
      <p className="page-entry__description" >{inputLabel}</p>
      <p className="page-entry__input-prefix">
        {inputPrefix}
        <input
          className="page-entry__input"
          type={inputType || 'text'}
          value={value}
          onChange={withValue(onChange)}
        />
      </p>
      { infoText ? <p className="page-entry__extra-info">{infoText}</p> : null }
      <button
        className={cs('button', { disabled: !isValid })}
        type="submit"
        value={value}
        disabled={!isValid}
        onClick={onSubmit}
      >
        {buttonText}
      </button>
    </div>
  );
}

Form.propTypes = propTypes;

export default Form;
