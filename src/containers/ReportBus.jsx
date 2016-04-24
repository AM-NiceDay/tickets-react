import React, { PropTypes } from 'react';
import QuestionForm from './QuestionForm';

function ReportBus({ params }) {
  return (
    <QuestionForm type="report" params={{ busCode: params.busCode }} />
  );
}

ReportBus.propTypes = {
  params: PropTypes.shape({
    busCode: PropTypes.string,
  }),
};

export default ReportBus;
