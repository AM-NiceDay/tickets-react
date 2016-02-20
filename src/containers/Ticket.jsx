import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getLastTicket } from '../actions/ticket';
import { getFormattedCurrentDate } from '../helpers/dateHelper';
import TicketExists from '../components/Ticket/Exists';
import TicketNotExists from '../components/Ticket/NotExists';

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
          <TicketNotExists formattedDate={getFormattedCurrentDate()} /> :
          <TicketExists formattedDate={getFormattedCurrentDate()} route={bus.route} routeName={bus.routeName} />

        }

      </div>
    );
  }
}

export default connect(state => ({
  ticket: state.ticket.toJS(),
  user: state.user.toJS()
}))(Ticket);
