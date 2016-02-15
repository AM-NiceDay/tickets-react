import React from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import IndexLoggedIn from '../components/IndexLoggedIn';
import IndexUnauth from '../components/IndexUnauth';
import { logout } from '../actions/user';
import { getLastTicket } from '../actions/ticket';

const Index = React.createClass({

  componentWillMount() {
    const userId = this.props.user.get('_id');

    this.props.dispatch(getLastTicket(userId));
  },

  render() {
    return this.props.user.get('loggedIn') ?
      <IndexLoggedIn
        phoneNumber={ this.props.user.get('phoneNumber') }
        ticket={ this.props.ticket }
        transmitToBuy={ () => this.props.dispatch(pushPath('/buy')) }
        logout={ () => this.props.dispatch(logout()) }
      /> :
      <IndexUnauth />;
  }
});

export default connect(state => ({
  user: state.user,
  ticket: state.ticket
}))(Index);
