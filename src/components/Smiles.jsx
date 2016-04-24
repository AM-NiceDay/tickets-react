import React, { PropTypes } from 'react';
import _ from 'lodash';

function Smiles({ currentReaction, onReactionChange }) {
  return (
    <div className="smiles">
      {
        [':)', ':|', ':('].map(reaction => (
          <a
            className="smile-wrap"
            key={reaction}
            onClick={onReactionChange(_.toLower(reaction))}
            style={_.toLower(reaction) !== currentReaction ? { color: 'gray' } : {}}
          >
            {reaction}
          </a>
        ))
      }
    </div>
  );
}

Smiles.propTypes = {
  currentReaction: PropTypes.string,
  onReactionChange: PropTypes.func.isRequired,
};

export default Smiles;
