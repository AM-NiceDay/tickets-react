import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLastTicket, getBusTickets } from '../actions/ticket';

const propTypes = {};

class BusChecker extends Component {

  componentDidMount() {
    this.props.getBusTickets(this.props.params.busCode);
  }

  render() {
    return (
      <div>
        {
          this.props.busTickets.map(ticket => (
            <div>
              {ticket._id}
            </div>
          ))
        }
      </div>
    );
  }
}

BusChecker.propTypes = propTypes;

export default connect(state => ({
  busTickets: state.busTickets,
}), dispatch => ({
  getBusTickets: bindActionCreators(getBusTickets, dispatch),
}))(BusChecker);
