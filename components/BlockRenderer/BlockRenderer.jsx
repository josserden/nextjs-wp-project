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
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      originalContent: PropTypes.string.isRequired,
      innerBlocks: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  ).isRequired,
};
