import React from 'react';
import { connect } from 'react-redux';
import { checkBus, uncheckBus } from '../actions/bus';
import { buyTicket } from '../actions/ticket';
import { pushPath } from 'redux-simple-router';
import CheckMessage from '../components/CheckMessage';

const BuyTicket = React.createClass({

  handleCheckBus() {
    const { dispatch } = this.props;
    const busId = this.refs.busId.value;

    if (busId.length > 3) {
      dispatch(checkBus(busId));
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
    const busId = this.refs.busId.value;

    if (checked && exist) {
      dispatch(buyTicket(busId));
      dispatch(pushPath('/'));
    }
  },

  render() {
    const { checked, exist, route, routeName } = this.props.bus.toJS();
    const checkProps = { checked, exist, route, routeName };

    return <div>
      <input type="text" ref="busId" placeholder="Bus Id" onKeyUp={ this.handleCheckBus } />
      <CheckMessage { ...checkProps } />
      <button disabled={ !checked || !exist } onClick={ this.handleBuyTicket } >Buy</button>
    </div>;
  }
});

export default connect(state => ({
  bus: state.bus
}))(BuyTicket);
