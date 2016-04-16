import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SideBar from './SideBar';

const propTypes = {
  children: PropTypes.element,
  sideBar: PropTypes.bool.isRequired,
};

function App({ children, sideBar }) {
  return (
    <div className="wrapper">
      {children}
      { sideBar && <SideBar /> }
    </div>
  );
}

App.propTypes = propTypes;

export default connect(state => ({
  sideBar: state.sideBar,
}))(App);
