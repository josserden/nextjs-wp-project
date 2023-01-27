import React from 'react';
import PropTypes from 'prop-types';
import {
  CallToActionBtn,
  Column,
  Columns,
  Cover,
  Heading,
  Paragraph,
} from 'components';
import { theme } from 'theme';

export const BlockRenderer = ({ blocks = [] }) => {
  return blocks.map(block => {
    const { id, name, attributes, innerBlocks } = block;

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

      case 'acf/cta-button':
        return (
          <CallToActionBtn
            key={id}
            label={attributes.data.label}
            destination={attributes.data.destination ?? '/'}
            align={attributes.data.align}
          />
        );

      case 'core/columns':
        return (
          <Columns key={id} isStackedOnMobile={attributes.isStackedOnMobile}>
            <BlockRenderer blocks={innerBlocks} />
          </Columns>
        );

      case 'core/column':
        return (
          <Column key={id} width={attributes.width}>
            <BlockRenderer blocks={innerBlocks} />
          </Column>
        );

      default: {
        console.log('UNKNOWN', block);
        return null;
      }
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
