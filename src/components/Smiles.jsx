import React, { PropTypes } from 'react';
import _ from 'lodash';

function Smiles({ currentReaction, onReactionChange }) {
  return (
    <div className="tempSmiles">
      {
        ['Positive', 'Neutral', 'Negative'].map(reaction => (
          <a
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
