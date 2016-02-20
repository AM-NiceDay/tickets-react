import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getFormattedTime, getFormattedDate } from '../helpers/dateHelper';
import { formatBusCode } from '../helpers/busCodeHelper';

class Ticket extends Component {

  render() {
    const { bus, ticket } = this.props;

    return (
      <div>
        <div>
          <Link to="/ticket">{'<-'}</Link>
          <span>Билет</span>
          <Link to="/">index</Link>
        </div>

        <div>
          <p>Код билета</p>
          <h2></h2>
          <p>Время оплаты</p>
          <p>{getFormattedTime(new Date(ticket.created))}, {getFormattedDate(new Date(ticket.created))}</p>
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
}

export default connect(state => ({
  ticket: state.ticket.toJS(),
  bus: state.bus.toJS()
}))(Ticket);
