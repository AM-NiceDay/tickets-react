import React from 'react';

const { string } = React.PropTypes;

export default React.createClass({

  propTypes: {
    phoneNumber: string.isRequired
  },

  render() {
    return <div>
      <p>Hello, { this.props.phoneNumber }</p>
    </div>;
  }
});
