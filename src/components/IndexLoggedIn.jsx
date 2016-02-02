import React from 'react';
import { pushPath } from 'redux-simple-router';

export default class IndexLoggedIn extends React.Component {
  render() {
    return <div>
      <p>Hello, { this.props.phoneNumber }</p>
      <button onClick={ this.props.logout }>Logout</button>
      { this.props.ticket.get('busId') ?
          <p>Ticket: { this.props.ticket.get('busId') } - { this.props.ticket.get('dateCreated').toString() }</p> :
          <button onClick={ this.props.transmitToBuy }>Buy ticket</button>
      }
    </div>;
  }
}
