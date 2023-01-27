import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const ButtonLink = ({ destination, label }) => {
  return (
    <Link href={destination}>
      <a className="btn">{label}</a>
    </Link>
  );
};

ButtonLink.propTypes = {
  destination: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
