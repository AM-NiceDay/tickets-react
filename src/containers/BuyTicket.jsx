import React from 'react';
import { connect } from 'react-redux';
import { checkBus } from '../actions/bus';

const BuyTicket = React.createClass({

  handleCheckBus() {
    const { dispatch } = this.props;
    const busId = this.refs.busId.value;

    if (busId.length === 3) {
      dispatch(checkBus(busId));
    }
  },

  checkMessage() {
    const { checked, exist, route } = this.props.bus;

    if (checked) {
      if (exist) {
        return `Bus route: ${route}`;
      }

      return `Bus doesn't exist`;
    }
  },

  render() {
    const { checked, exist } = this.props.bus;

    return <div>
      <input type="text" ref="busId" placeholder="Bus Id" onKeyUp={this.handleCheckBus} />
      <p>{this.checkMessage()}</p>
      <button disabled={!checked || !exist}>Buy</button>
    </div>;
  }
});

export default connect(state => ({
  bus: state.bus
}))(BuyTicket);
