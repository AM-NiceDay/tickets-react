import React from 'react';

export default class CheckMessage extends React.Component {
  render() {
    const { checked, exist, route, routeName } = this.props;

    return (
      <div>
        { checked ?
          (exist ? `Bus route: ${route} - ${routeName}` : `Bus doesn't exist`) : null}
      </div>
    );
  }
}
