import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Rx from 'rx';
import _ from 'lodash';
import { getBusTickets, verifyTicket, unsetVerifiableTicket } from '../actions/ticket';
import { getFormattedTime, getFormattedDate } from '../helpers/dateHelper';
import { formatBusCode } from '../helpers/busCodeHelper';

const propTypes = {};

class VerifyBusTickets extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const source = Rx.Observable.fromEvent(this.refs.ticketId, 'keyup')
      .map(event => event.target.value);

    source.filter(id => id.length !== 4)
      .subscribe(this.props.unsetVerifiableTicket);

    source.filter(id => id.length === 4)
      .distinctUntilChanged()
      .throttle(250)
      .map(id => _.find(this.props.busTickets, { _id: id }))
      .subscribe(this.props.verifyTicket);

    this.props.getBusTickets(this.props.params.busCode);
  }

  render() {
    const ticket = this.props.verifiableTicket;
    const bus = ticket.bus;

    return (
      <div>
        <input type="text" ref="ticketId" />

        {
          ticket.verified ? (
            <div>
              <p>Код билета</p>
              <h2>{ticket._id}</h2>
              <p>Время оплаты</p>
              <p>{getFormattedTime(new Date(ticket.created))}, {getFormattedDate(new Date(ticket.created))}</p>
              <p>Номер маршрута</p>
              <h3>№{bus.route}</h3>
              <p>Код автотранспорта</p>
              <p>{formatBusCode(bus.cityId, bus._id)}</p>
            </div>
          ) : null
        }

        {
          ticket.error ? (
            <div>
              Билета не существует
            </div>
          ) : null
        }
      </div>
    );
  }
}

VerifyBusTickets.propTypes = propTypes;

export default connect(state => ({
  busTickets: state.busTickets,
  verifiableTicket: state.verifiableTicket
}), dispatch => ({
  getBusTickets: bindActionCreators(getBusTickets, dispatch),
  verifyTicket: bindActionCreators(verifyTicket, dispatch),
  unsetVerifiableTicket: bindActionCreators(unsetVerifiableTicket, dispatch)
}))(VerifyBusTickets);
