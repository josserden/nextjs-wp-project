import { BlockRenderer, MainMenu } from 'components';
import PropTypes from 'prop-types';

export const Page = ({ mainMenuItems, blocks, callToAction }) => {
  return (
    <>
      <MainMenu items={mainMenuItems} callToAction={callToAction} />
      <BlockRenderer blocks={blocks} />
    </>
  );
};

Page.propTypes = {
  mainMenuItems: PropTypes.arrayOf(PropTypes.object),
  blocks: PropTypes.arrayOf(PropTypes.object),
  callToAction: PropTypes.object,
};
