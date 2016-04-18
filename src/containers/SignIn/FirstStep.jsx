import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { setPhoneNumber } from '../../actions/user';
import Form from '../../components/Form';
import { isPhoneNumber } from '../../utils/validate';

const propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    setPhoneNumber: PropTypes.func.isRequired,
    pushToSecondStep: PropTypes.func.isRequired,
  }),
};

export function FirstStep({ phoneNumber, actions }) {
  return (
    <Form
      inputLabel="Для начала введите свой мобильный номер"
      inputPrefix="+375"
      buttonText="→"
      value={phoneNumber}
      onChange={actions.setPhoneNumber}
      onSubmit={actions.pushToSecondStep}
      isValid={isPhoneNumber(phoneNumber)}
    />
  );
}

FirstStep.propTypes = propTypes;

export default connect(state => ({
  phoneNumber: state.user.draft.phoneNumber,
}), dispatch => ({
  actions: bindActionCreators({
    setPhoneNumber,
    pushToSecondStep: () => push('/signin/2'),
  }, dispatch),
}))(FirstStep);
