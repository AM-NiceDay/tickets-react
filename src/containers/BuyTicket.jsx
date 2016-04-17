import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { checkBus, uncheckBus, setBusCode } from '../actions/bus';
import { buyTicket } from '../actions/ticket';
import { Link } from 'react-router';
import Form from '../components/Form';

const propTypes = {
  bus: PropTypes.shape({
    id: PropTypes.number,
    code: PropTypes.string,
    isChecked: PropTypes.bool,
  }),
  user: PropTypes.shape({
    _id: PropTypes.string,
  }),
  actions: PropTypes.shape({
    checkBus: PropTypes.func,
    uncheckBus: PropTypes.func,
    setBusCode: PropTypes.func,
  }),
};

class BuyTicket extends Component {
  constructor(props) {
    super(props);

    this.checkBusHandler = this.checkBusHandler.bind(this);
    this.buyTicketHandler = this.buyTicketHandler.bind(this);
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

  buyTicketHandler() {
    const { user, bus: { id, code, isChecked }, actions } = this.props;

    if (id && isChecked) {
      actions.buyTicket(user.index._id, code)
        .then(() => {
          actions.push('/ticket');
        });
    }
  }

  render() {
    const { id, code, isChecked } = this.props.bus;

    return (
      <div className="main">
        <div className="page-entry">

          <div className="page-entry__header">
            <Link className="link-element page-entry__link-element" to="/ticket">{'←'}</Link>
            <span className="page-logo page-entry__logo">|||||</span>
          </div>

          <Form
            inputLabel="Введите четырехзначный код, размещенный в автотранспорте"
            infoText="С Вашего счета будет списано 4 650 руб"
            buttonText="Подтвердить"
            value={code}
            onChange={this.checkBusHandler}
            onSubmit={this.buyTicketHandler}
            isValid={ id && isChecked }
          />

        </div>
      </div>

    );
  }
}

BuyTicket.propTypes = propTypes;

export default connect(state => ({
  user: state.user,
  bus: state.bus,
}), dispatch => ({
  actions: bindActionCreators({
    checkBus,
    uncheckBus,
    setBusCode,
    buyTicket,
    push,
  }, dispatch),
}))(BuyTicket);
