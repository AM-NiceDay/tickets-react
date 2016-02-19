import React from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { Link } from 'react-router';

const SignIn = React.createClass({
  render() {
    return (
      <div>
        <Link to="/signup">Регистрация</Link>
        {this.props.children}
      </div>
    );
  }
});

export default connect()(SignIn);
