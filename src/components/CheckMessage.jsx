import React from 'react';

export default class CheckMessage extends React.Component {
  render() {
    const { checked, exist, route, routeName, loading } = this.props;

    return loading ?
      <div>Loading</div> :
      <div>
        { checked ?
          (exist ? `Bus route: ${route} - ${routeName}` : `Bus doesn't exist`) : null}
      </div>;
  }
}
