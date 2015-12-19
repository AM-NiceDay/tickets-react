import React from 'react';

export default React.createClass({
  render() {
    return <div>
      <input type="text" ref="busId" placeholder="Bus Id" />
      <button>Buy</button>
    </div>;
  }
});
