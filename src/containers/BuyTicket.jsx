import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { buyTicket } from '../actions/ticket';
import { Link } from 'react-router';
import BusSelectionForm from './BusSelectionForm';

const propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
  }),
  actions: PropTypes.shape({
    buyTicket: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};

class BuyTicket extends Component {
  constructor(props) {
    super(props);

    this.buyTicketHandler = this.buyTicketHandler.bind(this);
  }

  buyTicketHandler({ id, code, isChecked }) {
    const { user, actions } = this.props;

    if (id && isChecked) {
      actions.buyTicket(user.index._id, code)
        .then(() => {
          actions.push('/ticket');
        });
    }
  }

  render() {
    return (
      <div className="main">
        <div className="page-entry">
          <div className="page-entry__header">
            <Link className="link-element page-entry__link-element" to="/ticket">{'←'}</Link>
            <span className="page-logo page-entry__logo">|||||</span>
          </div>

          <BusSelectionForm onSubmit={this.buyTicketHandler} />
        </div>
      </div>
    );
  }
}

BuyTicket.propTypes = propTypes;

export default connect(state => ({
  user: state.user,
  bus: state.bus,
}), dispatch => ({
  actions: bindActionCreators({
    buyTicket,
    push,
  }, dispatch),
}))(BuyTicket);
