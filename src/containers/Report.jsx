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
            <span className="page-logo page-entry__logo">|||||</span>
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
