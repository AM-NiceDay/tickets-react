import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import withValue from '../utils/withValue';
import { setQuestionText, setQuestionReaction, resetQuestion, sendQuestion } from '../actions/question';
import Smiles from '../components/Smiles';

const propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string,
    reaction: PropTypes.string,
  }),
  actions: PropTypes.shape({
    setQuestionText: PropTypes.func,
    setQuestionReaction: PropTypes.func,
    resetQuestion: PropTypes.func,
    sendQuestion: PropTypes.func,
  }),
};

class Help extends Component {
  constructor(props) {
    super(props);

    this.changeReactionHandler = this.changeReactionHandler.bind(this);
    this.sendQuestionHandler = this.sendQuestionHandler.bind(this);
  }

  changeReactionHandler(reaction) {
    return () => this.props.actions.setQuestionReaction(reaction);
  }

  sendQuestionHandler() {
    const { question, actions } = this.props;

    actions.sendQuestion('help', question.text, question.reaction);
    actions.resetQuestion();
  }

  render() {
    const { question, actions } = this.props;

    return (
      <div className="main">
        <div className="page-entry">
          <div className="page-entry__header">
            <a className="link-element link-menu" to="/"></a>
            <span className="page-logo page-entry__logo">Помощь</span>
          </div>
          <div className="page-feedback__form">
            <div className="feedback-wrapper">
              <Smiles
                currentReaction={question.reaction}
                onReactionChange={this.changeReactionHandler}
              />
              <p className="page-feedback__description">
                Здесь вы можете задать любой вопрос о Tickets
              </p>
              <textarea
                className="page-entry__textarea feedback-textarea"
                value={question.text}
                onChange={withValue(actions.setQuestionText)}
              />
            </div>
            <button
              className="button button_feedback-form"
              onClick={this.sendQuestionHandler}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Help.propTypes = propTypes;

export default connect(state => ({
  question: state.question,
}), dispatch => ({
  actions: bindActionCreators({
    setQuestionText,
    setQuestionReaction,
    resetQuestion,
    sendQuestion,
  }, dispatch),
}))(Help);
