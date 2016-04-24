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
            <span className="page-logo page-entry__logo">
                <svg  width="24" height="24" viewBox="0 0 24 24">
                  <path d="M2,6H4V18H2V6M5,6H6V18H5V6M7,6H10V18H7V6M11,6H12V18H11V6M14,6H16V18H14V6M17,6H20V18H17V6M21,6H22V18H21V6Z" />
                </svg>
            </span>
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
