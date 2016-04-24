import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import { getBusTickets, setTicketId, setIsChecked, resetTicket } from '../actions/ticket';
import { getFormattedTime, getFormattedDate } from '../helpers/dateHelper';
import Form from '../components/Form';

const propTypes = {
  ticketId: PropTypes.string,
  isChecked: PropTypes.bool,
  ticket: PropTypes.shape({
    created: PropTypes.string,
  }),
  bus: PropTypes.shape({
    route: PropTypes.number,
  }),
  params: PropTypes.shape({
    busCode: PropTypes.string,
  }),
  actions: PropTypes.shape({
    getBusTickets: PropTypes.func,
    setTicketId: PropTypes.func,
    setIsChecked: PropTypes.func,
    resetTicket: PropTypes.func,
  }),
};

class VerifyBusTickets extends Component {
  constructor(props) {
    super(props);

    this.checkTicketHandler = this.checkTicketHandler.bind(this);
    this.updateTickets = this.updateTickets.bind(this);
  }

  componentDidMount() {
    this.updateTickets();
  }

  checkTicketHandler(ticketId) {
    const { actions } = this.props;

    actions.setTicketId(ticketId);
    if (ticketId.length === 4) {
      actions.setIsChecked();
    }
  }

  updateTickets() {
    const { params, actions } = this.props;

    actions.getBusTickets(params.busCode);
  }

  render() {
    const { ticketId, isChecked, ticket, bus, params, actions } = this.props;

    return (
      <div className="main">
        <div className="page-entry">

          <div className="page-entry__header">
            <Link className="link-element page-entry__link-element" to="/verify">{'←'}</Link>
            <span className="page-logo page-entry__logo">Автобус №{bus.route}</span>
            <div className="page-ticket__link-element-reload">
              <a
                className="link-element-reload"
                onClick={this.updateTickets}
              >
                ↻
              </a>
            </div>
          </div>

          <Form
            inputLabel="Введите четырехзначный код билета пассажира"
            buttonText="Очистить"
            value={ticketId || ''}
            onChange={this.checkTicketHandler}
            onSubmit={actions.resetTicket}
            isValid
            className={isChecked && ticket ? 'form_justify-start' : ''}
          />

          {
            isChecked && ticket &&
              <div className="ticket-info-block">
                <p className="ticket-info__description">Код билета</p>
                <h2 className="ticket-info-id">{ticketId}</h2>
                <p className="ticket-info__description">Время оплаты</p>
                <p className="ticket-info__time ticket-info_bold">
                  {getFormattedTime(new Date(ticket.created))}
                  {','}
                </p>
                <p className="ticket-info__time">{getFormattedDate(new Date(ticket.created))}</p>
                <p className="ticket-info__description">Номер маршрута</p>
                <h3 className="bus-number">№{bus.route}</h3>
                <p className="ticket-info__description">Код автотранспорта</p>
                <p className="ticket-info_bold">{params.busCode}</p>
              </div>
          }

        </div>
      </div>
    );
  }
}

VerifyBusTickets.propTypes = propTypes;

export default connect((state, props) => {
  const ticket = state.ticket.id ? state.tickets[state.ticket.id] : null;
  const bus = state.buses[props.params.busCode];

  return {
    ticketId: state.ticket.id,
    isChecked: state.ticket.isChecked,
    ticket,
    bus,
  };
}, dispatch => ({
  actions: bindActionCreators({
    getBusTickets,
    setTicketId,
    setIsChecked,
    resetTicket,
  }, dispatch),
}))(VerifyBusTickets);
