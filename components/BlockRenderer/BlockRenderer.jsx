import React from 'react';
import PropTypes from 'prop-types';
import { Cover, Heading, Paragraph } from 'components';
import { theme } from 'theme';

export const BlockRenderer = ({ blocks = [] }) => {
  return blocks.map(({ name, id, attributes, innerBlocks }) => {
    switch (name) {
      case 'core/cover':
        return (
          <Cover key={id} url={attributes.url}>
            <BlockRenderer blocks={innerBlocks} />
          </Cover>
        );

      case 'core/heading':
        return (
          <Heading
            key={id}
            content={attributes.content}
            textAlign={attributes.textAlign}
            level={attributes.level}
          />
        );

      case 'core/paragraph':
        return (
          <Paragraph
            key={id}
            content={attributes.content}
            textAlign={attributes.align}
            textColor={
              theme[attributes.textColor] ?? attributes.style?.color?.text
            }
          />
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
