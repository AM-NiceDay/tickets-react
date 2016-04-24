import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function SignIn({ children }) {
  return (
    <div className="main">
      <div className="page-entry">
        <div className="page-entry__header">
          <Link className="link-element page-entry__link-element" to="/signup">
            Регистрация
          </Link>
          <span className="page-logo page-entry__logo">
              <svg  width="24" height="24" viewBox="0 0 24 24">
                <path d="M2,6H4V18H2V6M5,6H6V18H5V6M7,6H10V18H7V6M11,6H12V18H11V6M14,6H16V18H14V6M17,6H20V18H17V6M21,6H22V18H21V6Z" />
              </svg>
          </span>
        </div>

        {children}

      </div>
    </div>
  );
}

SignIn.propTypes = propTypes;

export default SignIn;
