import { BlockRenderer, MainMenu } from 'components';
import React from 'react';

export const Page = ({ mainMenuItems, blocks, callToAction }) => {
  return (
    <>
      <MainMenu items={mainMenuItems} callToAction={callToAction} />
      <BlockRenderer blocks={blocks} />
    </>
  );
};
