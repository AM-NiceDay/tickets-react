import React from 'react';

export default class IndexLoggedIn extends React.Component {

  isTicketExists() {
    return this.props.ticket.has('busId');
  }

  render() {
    return <div>
      <p>Hello, { this.props.phoneNumber }</p>
      <button onClick={ this.props.logout }>Logout</button>
      <button onClick={ this.props.transmitToBuy }>Buy ticket</button>
      { this.isTicketExists() ?
        <p>Ticket: { this.props.ticket.get('busId') } - { this.props.ticket.get('created') }</p> : null
      }
    </div>;
  }
}
