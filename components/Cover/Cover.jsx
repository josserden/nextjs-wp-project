import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { CoverSection, CoverContainer } from './Cover.styled';

export const Cover = ({ children, url }) => {
  return (
    <CoverSection>
      <Image
        alt="Cover image"
        src={url}
        layout="fill"
        objectFit="cover"
        className=" mix-blend-soft-light"
      />
      <CoverContainer>{children}</CoverContainer>
    </CoverSection>
  );
};

Cover.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};
