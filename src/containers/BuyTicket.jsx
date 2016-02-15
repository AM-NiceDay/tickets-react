import React from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { checkBus, uncheckBus } from '../actions/bus';
import { buyTicket } from '../actions/ticket';
import CheckMessage from '../components/CheckMessage';

const BuyTicket = React.createClass({

  handleCheckBus() {
    const { dispatch } = this.props;
    const busCode = this.refs.busCode.value;

    if (busCode.length === 4) {
      dispatch(checkBus(busCode));
    } else {
      dispatch(uncheckBus());
    }
  },

  handleBuyTicket() {
    const { dispatch, user } = this.props;
    const { checked, exist } = this.props.bus.toJS();
    const busCode = this.refs.busCode.value;

    if (checked && exist) {
      dispatch(buyTicket(user.get('_id'), busCode)).payload.promise
        .then(result => {
          if (!result.error) {
            dispatch(pushPath('/'));
          }
        });
    }
  },

  render() {
    const { checked, exist, route, routeName, loading } = this.props.bus.toJS();
    const checkProps = { checked, exist, route, routeName, loading };

    return <div>
      <input type="text" ref="busCode" placeholder="Bus Id" onKeyUp={ this.handleCheckBus } />
      <CheckMessage { ...checkProps } />
      { this.props.ticket.get('loading') ?
        <span>Loading</span> :
        <button disabled={ !checked || !exist } onClick={ this.handleBuyTicket }>Buy</button>
      }
    </div>;
  }
});

export default connect(state => ({
  user: state.user,
  bus: state.bus,
  ticket: state.ticket
}))(BuyTicket);
