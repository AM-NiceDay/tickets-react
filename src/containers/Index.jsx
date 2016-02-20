import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/user';
import { getLastTicket } from '../actions/ticket';

class Index extends Component {

  constructor() {
    super();

    this.logout = this.logoutHandler.bind(this);
  }

  logoutHandler() {
    const { dispatch } = this.props;

    dispatch(logout());
  }

  render() {
    const { name, lastName } = this.props.user.toJS();

    return (
      <div>
        <Link to="/signin" onClick={this.logout}>Logout</Link>
        <Link to="/ticket">Ticket</Link>
        <p>{name} {lastName}</p>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Index);
