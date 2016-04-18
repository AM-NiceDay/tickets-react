import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { showSideBar } from '../actions/sideBar';
import { checkBus, uncheckBus, setBusCode, resetBus } from '../actions/bus';
import Form from '../components/Form';

const propTypes = {
  bus: PropTypes.shape({
    id: PropTypes.number,
    code: PropTypes.string,
    isChecked: PropTypes.bool,
  }),
  actions: PropTypes.shape({
    checkBus: PropTypes.func,
    uncheckBus: PropTypes.func,
    setBusCode: PropTypes.func,
    resetBus: PropTypes.func,
    push: PropTypes.func,
  }),
};

class Verify extends Component {
  constructor(props) {
    super(props);

    this.checkBusHandler = this.checkBusHandler.bind(this);
    this.verifyBusHandler = this.verifyBusHandler.bind(this);

    this.props.actions.resetBus();
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

  verifyBusHandler() {
    const { bus, actions } = this.props;

    actions.push(`/verify-bus-tickets/${bus.code}`);
  }

  render() {
    const { bus: { id, code, isChecked }, actions } = this.props;

    return (
      <div className="main">
        <div className="page-entry">

          <div className="page-entry__header">
            <a className="link-element link-menu" onClick={actions.showSideBar}></a>
            <span className="page-logo page-entry__logo">|||||</span>
          </div>

          <Form
            inputLabel="Введите четырехзначный код, размещенный в автотранспорте"
            buttonText="Начать проверку"
            value={code}
            onChange={this.checkBusHandler}
            onSubmit={this.verifyBusHandler}
            isValid={id && isChecked}
          />

        </div>
      </div>
    );
  }
}

Verify.propTypes = propTypes;

export default connect(state => ({
  bus: state.bus,
}), dispatch => ({
  actions: bindActionCreators({
    checkBus,
    uncheckBus,
    setBusCode,
    showSideBar,
    resetBus,
    push,
  }, dispatch),
}))(Verify);
