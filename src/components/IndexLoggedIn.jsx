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
      <Link to="/buy">Buy ticket</Link>
    </div>;
  }
});
