import { BlockRenderer, MainMenu } from 'components';
import { PageProvider } from 'context/page';
import PropTypes from 'prop-types';

export const Page = props => {
  const { mainMenuItems, blocks, callToAction } = props;

  console.log('Page', props);

  return (
    <PageProvider value={{ title: props.title }}>
      <MainMenu items={mainMenuItems} callToAction={callToAction} />
      <BlockRenderer blocks={blocks} />
    </PageProvider>
  );
};

Page.propTypes = {
  mainMenuItems: PropTypes.arrayOf(PropTypes.object),
  blocks: PropTypes.arrayOf(PropTypes.object),
  callToAction: PropTypes.object,
};
