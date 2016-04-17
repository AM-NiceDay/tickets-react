import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getFormattedTime, getFormattedDate } from '../helpers/dateHelper';
import { formatBusCode } from '../helpers/busCodeHelper';

const propTypes = {
  ticket: PropTypes.shape({
    _id: PropTypes.string,
    created: PropTypes.string,
  }),
  bus: PropTypes.shape({
    _id: PropTypes.number,
    cityId: PropTypes.number,
  }),
};

function Ticket({ ticket, bus }) {
  return (
    <div>
      <div>
        <Link to="/ticket">{'<-'}</Link>
        <span>Билет</span>
      </div>

      <div>
        <p>Код билета</p>
        <h2>{ticket._id}</h2>
        <p>Время оплаты</p>
        <p>
          {getFormattedTime(new Date(ticket.created))}, {getFormattedDate(new Date(ticket.created))}
        </p>
        <p>Номер маршрута</p>
        <h3>№{bus.route}</h3>
        <p>Код автотранспорта</p>
        <p>{formatBusCode(bus.cityId, bus._id)}</p>
        <p>------------------------------------</p>
        <div>
          <p>При возникновении каких-либо проблем,
            Вы можете в любое время сообщить нам о них.
            Мы обязательно рассмотрим заявку
            в самые короткие сроки и ответим обязательно Вам</p>
          <button>Помощь</button>
        </div>
      </div>

    </div>
  );
}

Ticket.propTypes = propTypes;

export default connect(state => {
  const lastTicket = state.lastTicket;
  const ticket = lastTicket.id ? state.tickets[lastTicket.id] : null;
  const bus = ticket ? state.buses[ticket.bus] : null;

  return {
    ticket,
    bus,
  };
})(Ticket);
