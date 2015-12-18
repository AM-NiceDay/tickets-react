import React from 'react';

export default React.createClass({
  render() {
    return <div>
      <input type="text" ref="phoneNumber" placeholder="Phone number" />
      <input type="text" ref="Password" placeholder="Password" />
      <button>Sign In</button>
    </div>;
  }
});
