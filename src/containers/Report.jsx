import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { showSideBar } from '../actions/sideBar';
import BusSelectionForm from './BusSelectionForm';

const propTypes = {
  actions: PropTypes.shape({
    showSideBar: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }),
};

class Report extends Component {
  constructor(props) {
    super(props);

    this.selectBusHandler = this.selectBusHandler.bind(this);
  }

  selectBusHandler(bus) {
    this.props.actions.push(`/report/${bus.code}`);
  }

  render() {
    const { actions } = this.props;

    return (
      <div className="main">
        <div className="page-entry">
          <div className="page-entry__header">
            <a className="link-element link-menu" onClick={actions.showSideBar}></a>
            <span className="page-logo page-entry__logo">
                <svg  width="24" height="24" viewBox="0 0 24 24">
                  <path d="M2,6H4V18H2V6M5,6H6V18H5V6M7,6H10V18H7V6M11,6H12V18H11V6M14,6H16V18H14V6M17,6H20V18H17V6M21,6H22V18H21V6Z" />
                </svg>
            </span>
          </div>

          <BusSelectionForm onSubmit={this.selectBusHandler} />
        </div>
      </div>
    );
  }
}

Report.propTypes = propTypes;

export default connect(() => ({}), dispatch => ({
  actions: bindActionCreators({
    showSideBar,
    push,
  }, dispatch),
}))(Report);
