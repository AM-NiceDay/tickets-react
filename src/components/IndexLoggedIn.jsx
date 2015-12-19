import React from 'react';

export default React.createClass({
  render() {
    return <div>
      <p>Hello, { this.props.phoneNumber }</p>
    </div>;
  }
});
