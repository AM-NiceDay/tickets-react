import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import { getLastTicket } from '../actions/ticket';
import { showSideBar } from '../actions/sideBar';
import { getFormattedCurrentDate } from '../helpers/dateHelper';
import TicketExists from '../components/Ticket/Exists';
import TicketNotExists from '../components/Ticket/NotExists';

const propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.number,
  }),
  ticket: PropTypes.object,
  actions: PropTypes.shape({
    getLastTicket: PropTypes.func,
    showSideBar: PropTypes.func,
  }),
};

class Ticket extends Component {
  componentDidMount() {
    const { actions, user } = this.props;

    actions.getLastTicket(user._id);
  }

  render() {
    const { ticket, actions } = this.props;
    const { bus } = ticket;

    return (
      <div>
        <div className="main">
          <div className="page-ticket">
            <div className="page-ticket__header">
              <div className="link-element page-ticket__link-element">
                <a className="link-element link-menu" onClick={actions.showSideBar}>—</a>
              </div>
              <span className="page-ticket__logo">Билет</span>
              <div className="link-element page-ticket__link-element">
                <Link className="link-element page-ticket__link-buy-ticket" to="/buy">+</Link>
              </div>
            </div>
          </div>
        </div>
        {
          _.isEmpty(ticket) ?
            <TicketNotExists formattedDate={getFormattedCurrentDate()} /> :
            <TicketExists
              formattedDate={getFormattedCurrentDate()}
              route={bus.route}
              routeName={bus.routeName}
            />
        }
      </div>
    );
  }
}

Ticket.propTypes = propTypes;

export default connect(state => ({
  ticket: state.ticket,
  user: state.user.index,
}), dispatch => ({
  actions: bindActionCreators({
    getLastTicket,
    showSideBar,
  }, dispatch),
}))(Ticket);
