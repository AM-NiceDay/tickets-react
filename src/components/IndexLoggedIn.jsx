import React from 'react';
import { Link } from 'react-router';

const { string } = React.PropTypes;

export default React.createClass({

  propTypes: {
    phoneNumber: string.isRequired
  },

  render() {
    return <div>
      <p>Hello, { this.props.phoneNumber }</p>
      {
        this.props.ticket.get('busId') ?
          <p>Ticket: {this.props.ticket.get('busId')} - {this.props.ticket.get('dateCreated').toString()}</p> :
          <Link to="/buy">Buy ticket</Link>
      }
    </div>;
  }
});
