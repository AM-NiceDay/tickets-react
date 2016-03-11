import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { pushPath } from 'redux-simple-router';
import { logout } from '../actions/user';
import { getLastTicket } from '../actions/ticket';
import Form from '../components/Form';

class Index extends Component {

  constructor() {
    super();

    this.logout = this.logoutHandler.bind(this);
    this.controlBusHandler = this.controlBusHandler.bind(this);
  }

  logoutHandler() {
    const { dispatch } = this.props;

    dispatch(logout());
  }

  controlBusHandler(busCode) {
    this.props.dispatch(pushPath(`/verify-bus-tickets/${busCode}`));
  }

  render() {
    const { name, lastName, role } = this.props.user;

    return (
      <div className="main">
        <Link to="/signin" onClick={this.logout}>Logout</Link>
        { !role ? <Link to="/ticket">Ticket</Link> : null }
        <p>{name} {lastName}</p>
        {
          role === 'controller' ?
            <Form
              inputLabel="Введите четырехзначный код, размещенный в автотранспорте"
              buttonText="Начать проверку"
              submitHandler={this.controlBusHandler}
            /> :
            null
        }
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user.index,
}))(Index);
