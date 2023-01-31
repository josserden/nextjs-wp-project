import PropTypes from 'prop-types';
import { PageProvider } from 'context/page';
import { BlockRenderer } from 'components/BlockRenderer';
import { MainMenu } from 'components/MainMenu';
import Head from 'next/head';

export const Page = props => {
  const { mainMenuItems, blocks, callToAction } = props;

  return (
    <PageProvider
      value={{ title: props.title, propertyFeatures: props.propertyFeatures }}
    >
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
      </Head>

      <MainMenu items={mainMenuItems} callToAction={callToAction} />
      <BlockRenderer blocks={blocks} />
    </PageProvider>
  );
};

Page.propTypes = {
  mainMenuItems: PropTypes.arrayOf(PropTypes.object),
  blocks: PropTypes.arrayOf(PropTypes.object),
  callToAction: PropTypes.object,
  seo: PropTypes.shape({
    title: PropTypes.string,
    metaDesc: PropTypes.string,
  }),
};
