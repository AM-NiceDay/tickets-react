import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { checkBus, uncheckBus } from '../actions/bus';
import { buyTicket } from '../actions/ticket';
import CheckMessage from '../components/CheckMessage';
import { Link } from 'react-router';

class BuyTicket extends Component {

  constructor(props) {
    super(props);

    this.checkBusHandler = this.checkBusHandler.bind(this);
    this.buyTicketHandler = this.buyTicketHandler.bind(this);
  }

  checkBusHandler() {
    const { dispatch } = this.props;
    const busCode = this.refs.busCode.value;

    if (busCode.length === 4) {
      dispatch(checkBus(busCode));
    } else {
      dispatch(uncheckBus());
    }
  }

  buyTicketHandler(e) {
    e.preventDefault();

    const { dispatch, user } = this.props;
    const { checked, exist } = this.props.bus.toJS();
    const busCode = this.refs.busCode.value;

    if (checked && exist) {
      dispatch(buyTicket(user.get('_id'), busCode)).payload.promise
        .then(result => {
          if (!result.error) {
            dispatch(pushPath('/ticket'));
          }
        });
    }
  }

  render() {
    const { checked, exist } = this.props.bus.toJS();

    return (
      <div>
        <div>
          <Link to="/ticket">{'<-'}</Link>
          <span>Штрих код</span>
        </div>
        <form onSubmit={this.buyTicketHandler} >
          <p>Введите четырехзначный код, размещенный в автотранспорте</p>
          <p><input type="text" ref="busCode" onKeyUp={this.checkBusHandler} /></p>
          <p>С Вашего счета будет списано 4 650 руб</p>
          <button type="submit" disabled={!checked || !exist}>Подтвердить</button>
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user,
  bus: state.bus,
  ticket: state.ticket
}))(BuyTicket);
