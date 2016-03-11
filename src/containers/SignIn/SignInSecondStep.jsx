import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { getUserInfo, signIn } from '../../actions/user';
import Form from '../../components/Form';
import Spinner from '../../components/Spinner';

const propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    loading: PropTypes.bool,
  }),
  draft: PropTypes.shape({
    phoneNumber: PropTypes.number,
  }),
  actions: PropTypes.shape({
    getUserInfo: PropTypes.func,
    signIn: PropTypes.func,
    pushPath: PropTypes.func,
  }),
};

class SignInSecondStep extends Component {
  constructor(props) {
    super(props);

    this.signInHandler = this.signInHandler.bind(this);
  }

  componentDidMount() {
    const { actions, draft } = this.props;

    actions.getUserInfo(draft.phoneNumber);
  }

  signInHandler(password) {
    const { actions, user } = this.props;
    const { nextPathname = '/' } = user;

    actions.signIn(user.phoneNumber, password)
      .then(() => {
        actions.pushPath(nextPathname);
      });
  }

  render() {
    const { name, loading } = this.props.user;

    return loading ?
      <Spinner /> :
      <Form
        inputLabel={`Здравствуйте, ${name}! Теперь введите свой пароль`}
        inputType="password"
        buttonText="Подтвердить"
        submitHandler={this.signInHandler}
      />;
  }
}

SignInSecondStep.propTypes = propTypes;

export default connect(state => ({
  user: state.user.index,
  draft: state.user.draft,
}), dispatch => ({
  actions: bindActionCreators({
    getUserInfo,
    signIn,
    pushPath,
  }, dispatch),
}))(SignInSecondStep);
