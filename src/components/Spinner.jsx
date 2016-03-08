import React, {PropTypes} from 'react';
import Spinner from 'spin.js';

const propTypes = {
  config: PropTypes.object,
}

export default class SpinnerComponent extends React.Component {
  static defaultProps = {
    config: {},
  };

  componentDidMount() {
    const { config } = this.props;

    this.spinner = new Spinner({
      lines: 12, // The number of lines to draw
      length: 7, // The length of each line
      width: 4, // The line thickness
      radius: 10, // The radius of the inner circle
      color: '#000', // #rbg or #rrggbb
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
    });
    this.spinner.spin(this.refs.container);
  }

  componentWillUnmount() {
    this.spinner.stop();
  }

  render() {
    return <span ref="container"/>;
  }
}