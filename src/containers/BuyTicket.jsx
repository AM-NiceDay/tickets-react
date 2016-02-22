import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { checkBus, uncheckBus } from '../actions/bus';
import { buyTicket } from '../actions/ticket';
import { Link } from 'react-router';
import Form from '../components/Form';

class BuyTicket extends Component {

  constructor(props) {
    super(props);

    this.checkBusHandler = this.checkBusHandler.bind(this);
    this.buyTicketHandler = this.buyTicketHandler.bind(this);
  }

  checkBusHandler(busCode) {
    const { dispatch } = this.props;

    if (busCode.length === 4) {
      dispatch(checkBus(busCode));
    } else {
      dispatch(uncheckBus());
    }
  }

  buyTicketHandler(busCode) {
    const { dispatch, user } = this.props;
    const { checked, exist } = this.props.bus.toJS();

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
      <div className="main">
        <div>
          <Link to="/ticket">{'<-'}</Link>
          <span>Штрих код</span>
        </div>
        <Form
          inputLabel="Введите четырехзначный код, размещенный в автотранспорте"
          inputHandler={this.checkBusHandler}
          infoText="С Вашего счета будет списано 4 650 руб"
          buttonText="Подтвердить"
          buttonDisabled={!checked || !exist}
          submitHandler={this.buyTicketHandler}
        />
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user,
  bus: state.bus,
  ticket: state.ticket
}))(BuyTicket);
