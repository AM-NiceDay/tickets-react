import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { setPassword, cleanDraft, getUserInfo, signIn } from '../../actions/user';
import Form from '../../components/Form';
import Spinner from '../../components/Spinner';

const propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    loading: PropTypes.bool,
  }),
  draft: PropTypes.shape({
    phoneNumber: PropTypes.string,
    password: PropTypes.string,
  }),
  actions: PropTypes.shape({
    getUserInfo: PropTypes.func,
    signIn: PropTypes.func,
    pushPath: PropTypes.func,
  }),
};

export class SecondStep extends Component {
  constructor(props) {
    super(props);

    this.signInHandler = this.signInHandler.bind(this);
  }

  componentDidMount() {
    const { actions, draft } = this.props;

    actions.getUserInfo(draft.phoneNumber);
  }

  signInHandler() {
    const { actions, user, draft } = this.props;
    const { nextPathname = '/' } = user;

    actions.signIn(draft.phoneNumber, draft.password)
      .then(() => {
        actions.cleanDraft();
      })
      .then(() => {
        actions.push(nextPathname);
      });
  }

  render() {
    const { draft, user, actions } = this.props;

    return user.loading ?
      <Spinner /> :
      <Form
        inputLabel={`Здравствуйте, ${user.name}! Теперь введите свой пароль`}
        inputType="password"
        buttonText="Подтвердить"
        value={draft.password}
        onChange={actions.setPassword}
        onSubmit={this.signInHandler}
        isValid={true}
      />;
  }
}

SecondStep.propTypes = propTypes;

export default connect(state => ({
  user: state.user.index,
  draft: state.user.draft,
}), dispatch => ({
  actions: bindActionCreators({
    setPassword,
    cleanDraft,
    getUserInfo,
    signIn,
    push,
  }, dispatch),
}))(SecondStep);
