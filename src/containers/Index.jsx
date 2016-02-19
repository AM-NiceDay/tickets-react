import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { logout } from '../actions/user';
import { getLastTicket } from '../actions/ticket';

class Index extends Component {

  constructor() {
    super();

    this.logout = this.logoutHandler.bind(this);
    this.transmitToBuy = () => this.props.dispatch(pushPath('/buy'));
  }

  componentDidMount() {
    const userId = this.props.user.get('_id');

    this.props.dispatch(getLastTicket(userId));
  }

  logoutHandler() {
    const { dispatch } = this.props;

    dispatch(logout());
    dispatch(pushPath('/signin'));
  }


  isTicketExists() {
    return this.props.ticket.has('busId');
  }

  render() {
    const { name, lastName } = this.props.user.toJS();

    return (
      <div>
        <p>{name} {lastName}</p>
        <button onClick={ this.logout }>Logout</button>
        <button onClick={ this.transmitToBuy }>Buy ticket</button>
        { this.isTicketExists() ?
          <p>Ticket: { this.props.ticket.get('busId') } - { this.props.ticket.get('created') }</p> : null
        }
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user,
  ticket: state.ticket
}))(Index);
