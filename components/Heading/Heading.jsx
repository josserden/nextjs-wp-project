import React from 'react';
import PropTypes from 'prop-types';
import { getTextAlign, getFontSize } from 'utils';

export const Heading = ({ content, level, textAlign }) => {
  const HeadingTag = React.createElement(`h${level}`, {
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSize(
      level,
    )} ${getTextAlign(textAlign)}`,
    dangerouslySetInnerHTML: { __html: content },
  });

  return HeadingTag;
};

Heading.propTypes = {
  content: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  textAlign: PropTypes.string,
};
