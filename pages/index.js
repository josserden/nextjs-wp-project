import { Page } from 'components/Page';
import PropTypes from 'prop-types';
import { getPageStaticProps } from 'utils/getPageStaticProps';

export default function Home(props) {
  console.log('Home', props);

  return <Page {...props} />;
}

export const getStaticProps = getPageStaticProps;

Home.propTypes = {
  blocks: PropTypes.array.isRequired,
};
