import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { checkBus, uncheckBus, setBusCode, resetBus } from '../actions/bus';
import Form from '../components/Form';

const propTypes = {
  bus: PropTypes.shape({
    id: PropTypes.number,
    code: PropTypes.string,
    isChecked: PropTypes.bool,
  }),
  onSubmit: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    checkBus: PropTypes.func,
    uncheckBus: PropTypes.func,
    setBusCode: PropTypes.func,
    resetBus: PropTypes.func,
  }),
};

class BusSelectionForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.checkBusHandler = this.checkBusHandler.bind(this);

    this.props.actions.resetBus();
  }

  onSubmitHandler() {
    const { bus, onSubmit } = this.props;

    onSubmit(bus);
  }

  checkBusHandler(busCode) {
    const { actions } = this.props;

    actions.setBusCode(busCode);

    if (busCode.length === 4) {
      actions.checkBus(busCode);
    } else {
      actions.uncheckBus();
    }
  }

  render() {
    const { id, code, isChecked } = this.props.bus;

    return (
      <Form
        inputLabel="Введите четырехзначный код, размещенный в автотранспорте"
        buttonText="Подтвердить"
        value={code}
        onChange={this.checkBusHandler}
        onSubmit={this.onSubmitHandler}
        isValid={id && isChecked}
      />
    );
  }
}

BusSelectionForm.propTypes = propTypes;

export default connect(state => ({
  bus: state.bus,
}), dispatch => ({
  actions: bindActionCreators({
    checkBus,
    uncheckBus,
    setBusCode,
    resetBus,
  }, dispatch),
}))(BusSelectionForm);
