import { usePageContext } from 'context/page';
import PropTypes from 'prop-types';
import { Heading } from 'components/Heading';

export const PostTitle = ({ level, textAlign }) => {
  const { title } = usePageContext();

  return <Heading content={title} level={level} textAlign={textAlign} />;
};

PostTitle.propTypes = {
  level: PropTypes.number.isRequired,
  textAlign: PropTypes.string,
};
