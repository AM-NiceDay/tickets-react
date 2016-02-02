import React from 'react';
import { connect } from 'react-redux';
import { checkBus, uncheckBus } from '../actions/bus';
import { buyTicket } from '../actions/ticket';
import { pushPath } from 'redux-simple-router';
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

  checkMessage() {
    const { checked, exist, route, routeName } = this.props.bus.toJS();

    if (checked) {
      if (exist) {
        return `Bus route: ${route} - ${routeName}`;
      }

      return `Bus doesn't exist`;
    }
  },

  handleBuyTicket() {
    const { dispatch } = this.props;
    const { checked, exist } = this.props.bus;
    const busCode = this.refs.busCode.value;

    if (checked && exist) {
      dispatch(buyTicket(busCode));
      dispatch(pushPath('/'));
    }
  },

  render() {
    const { checked, exist, route, routeName } = this.props.bus.toJS();
    const checkProps = { checked, exist, route, routeName };

    return <div>
      <input type="text" ref="busCode" placeholder="Bus Id" onKeyUp={ this.handleCheckBus } />
      <CheckMessage { ...checkProps } />
      <button disabled={ !checked || !exist } onClick={ this.handleBuyTicket } >Buy</button>
    </div>;
  }
});

export default connect(state => ({
  bus: state.bus
}))(BuyTicket);
