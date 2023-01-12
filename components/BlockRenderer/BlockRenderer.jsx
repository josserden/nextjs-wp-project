import React from 'react';
import PropTypes from 'prop-types';

export const BlockRenderer = ({ blocks = [] }) => {
  return blocks.map(block => {
    switch (block.name) {
      case 'core/cover':
        return <div key={block.id}>core/cover</div>;

      default:
        return null;
    }
  });
};

BlockRenderer.propTypes = {
  blocks: PropTypes.array.isRequired,
};
