import React from 'react';
import history from '../history';

export default React.createClass({
  render() {
    return <div>
      <button onClick={() => history.pushState(null, '/signin')}>Sign In</button>
      <button>Sign Up</button>
    </div>;
  }
});
