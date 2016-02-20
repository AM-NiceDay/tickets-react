import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getFormattedCurrentDate } from '../helpers/dateHelper';

class Ticket extends Component {

  render() {
    return (
      <div>
        <div>
          <Link to="/">=</Link>
          <span>Билет</span>
          <Link to="/buy">+</Link>
        </div>

        {
          _.isEmpty(this.props.ticket) ?
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
              <h2>№{this.props.bus.route}</h2>
              <p>{this.props.bus.routeName}</p>
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
  bus: state.bus.toJS()
}))(Ticket);
