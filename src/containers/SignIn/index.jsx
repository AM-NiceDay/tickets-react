import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

class SignIn extends Component {
  render() {
    return (
      <div className="main">
        <div className="page-entry">
          <div className="page-entry__header">
            <Link className="link-element page-entry__link-element" to="/signup">
              Регистрация
            </Link>
            <span className="page-logo page-entry__logo"><p>||||||||</p></span>
          </div>

          {this.props.children}

        </div>
      </div>
    );
  }
}

SignIn.propTypes = propTypes;

export default SignIn;
