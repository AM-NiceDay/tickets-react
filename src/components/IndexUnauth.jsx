import React from 'react';
import { Link } from 'react-router';
import history from '../history';

export default React.createClass({
  render() {
    return <div>
      <Link to="/signin">Sign In</Link>
      {' '}
      <Link to="/signup">Sign Up</Link>
    </div>;
  }
});
