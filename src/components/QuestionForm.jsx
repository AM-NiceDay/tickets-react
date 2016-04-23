import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const propTypes = {
  actions: PropTypes.shape({

  }),
};

class QuestionForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions } = this.props;

    return (
      <div>

      </div>
    );
  }
}

QuestionForm.propTypes = propTypes;

export default connect(state => ({
}), dispatch => ({
  actions: bindActionCreators({

  }, dispatch),
}))(QuestionForm);
