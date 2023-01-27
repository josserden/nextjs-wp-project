import { ButtonLink } from 'components';
import React from 'react';

export const CallToActionBtn = ({ label, destination, align }) => {
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
