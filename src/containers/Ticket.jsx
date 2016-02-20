import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getLastTicket } from '../actions/ticket';
import { getFormattedCurrentDate } from '../helpers/dateHelper';

class Ticket extends Component {

  componentDidMount() {
    const { dispatch, user } = this.props;

    dispatch(getLastTicket(user._id));
  }

  render() {
    const { ticket } = this.props;
    const { bus } = ticket;

    return (
      <div>
        <div>
          <Link to="/">=</Link>
          <span>Билет</span>
          <Link to="/buy">+</Link>
        </div>

        {
          _.isEmpty(ticket) ?
          <div>
            <div>
              <p>{getFormattedCurrentDate()}</p>
              <h2>У вас нет билета</h2>
              <p>Стоимость билета - 4 650 руб</p>
              <p>Для оплаты проезда нажмите "плюсик"</p>
            </div>
            <p>------------------------------------</p>
            <div>
              <p>Выберите способ оплаты</p>
              <p>Счет мобильного телефона</p>
              <p>Банковская карта</p>
              <p>PayPal</p>
            </div>
          </div> :
          <div>
            <div>
              <p>{getFormattedCurrentDate()}</p>
              <h2>№{bus.route}</h2>
              <p>{bus.routeName}</p>
              <p>Благодарим за своевременную оплату</p>
            </div>
            <p>------------------------------------</p>
            <div>
              <p>Для предъявления проездного билета нужно нажать на кнопку ниже и предоставить контроллеру доступ к экрану телефона</p>
              <Link to="/show-ticket">Предъявить билет</Link>
            </div>
          </div>
        }

      </div>
    );
  }
}

export default connect(state => ({
  ticket: state.ticket.toJS(),
  user: state.user.toJS()
}))(Ticket);
