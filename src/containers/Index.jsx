import React from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import IndexLoggedIn from '../components/IndexLoggedIn';
import IndexUnauth from '../components/IndexUnauth';

const Index = React.createClass({
  render() {
    return this.props.user.get('loggedIn') ?
      <IndexLoggedIn
        phoneNumber={ this.props.user.get('phoneNumber') }
        ticket={ this.props.ticket }
        transmitToBuy={ () => this.props.dispatch(pushPath('/buy')) }
      /> :
      <IndexUnauth />;
  }
});

export default connect(state => ({
    user: state.user,
    ticket: state.ticket
  }))(Index);
