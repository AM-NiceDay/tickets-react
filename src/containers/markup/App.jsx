import React from 'react';

export default React.createClass({
  render(){
    return <div className="wrapper">
      {this.props.children}
    </div>;
  }
});