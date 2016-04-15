import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { setPhoneNumber } from '../../actions/user';
import Form from '../../components/Form';
import { isPhoneNumber } from '../../utils/validate';

const propTypes = {
  setPhoneNumber: PropTypes.func,
  transmitToSecondStep: PropTypes.func,
};

class SignInFirstStep extends Component {
  constructor(props) {
    super(props);

    this.nextStepHandler = this.nextStepHandler.bind(this);
  }

  nextStepHandler(phoneNumber) {
    this.props.setPhoneNumber(Number(phoneNumber));
    this.props.transmitToSecondStep();
  }

  render() {
    return (
      <Form
        inputLabel="Для начала введите свой мобильный номер"
        inputPrefix="+375"
        buttonText="→"
        submitHandler={this.nextStepHandler}
        validator={isPhoneNumber}
      />
    );
  }
}

SignInFirstStep.propTypes = propTypes;

export default connect(() => ({}), dispatch => ({
  setPhoneNumber: bindActionCreators(setPhoneNumber, dispatch),
  transmitToSecondStep: () => dispatch(push('/signin/2')),
}))(SignInFirstStep);
