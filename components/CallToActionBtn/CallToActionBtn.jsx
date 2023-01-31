import { ButtonLink } from 'components/ButtonLink';
import React from 'react';
import PropTypes from 'prop-types';

export const CallToActionBtn = ({ label, destination, align = 'left' }) => {
  const alignMap = {
    left: 'text-align',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={destination} label={label} />
    </div>
  );
};

CallToActionBtn.propTypes = {
  label: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  align: PropTypes.string,
};
