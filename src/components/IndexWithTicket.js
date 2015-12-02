import React from 'react';

export default React.createClass({

  getTicket() {
    return this.props.ticket || {};
  },

  render() {
    return <div>
      <h4 className="t-id">Ticket id: {this.getTicket().id}</h4>
      <h4 className="t-date-created">Date created: {this.getTicket().dateCreated.toString()}</h4>
    </div>;
  }

});