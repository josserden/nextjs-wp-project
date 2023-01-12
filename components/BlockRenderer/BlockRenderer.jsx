import React from 'react';
import PropTypes from 'prop-types';
import { Cover } from 'components';

export const BlockRenderer = ({ blocks = [] }) => {
  return blocks.map(({ name, id, attributes }) => {
    switch (name) {
      case 'core/cover':
        return (
          <Cover key={id} url={attributes.url}>
            core/cover
          </Cover>
        );

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
