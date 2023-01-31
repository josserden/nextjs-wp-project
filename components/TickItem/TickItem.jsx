import React from 'react';
import PropTypes from 'prop-types';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TickItem = ({ children }) => {
  return (
    <div className="grid grid-cols-[50px_1fr] gap-3">
      <span className="flex items-center justify-center text-3xl text-green-500">
        <FontAwesomeIcon icon={faCircleCheck} className="text-primary" />
      </span>
      <div>{children}</div>
    </div>
  );
};

TickItem.propTypes = {
  children: PropTypes.node.isRequired,
};
