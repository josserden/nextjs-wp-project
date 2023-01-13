import React from 'react';
import PropTypes from 'prop-types';
import { getTextAlign } from 'utils';

export const Paragraph = ({ content, textAlign = 'left', textColor }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: content }}
      className={`mx-auto max-w-5xl ${getTextAlign(textAlign)}`}
      style={{
        color: textColor,
      }}
    />
  );
};

Paragraph.propTypes = {
  textAlign: PropTypes.string,
  content: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
