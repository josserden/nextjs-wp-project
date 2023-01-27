import PropTypes from 'prop-types';

export const Columns = ({ isStackedOnMobile, children }) => {
  return (
    <section className="py-10">
      <div
        className={`container ${isStackedOnMobile ? 'block md:flex' : 'flex'}`}
      >
        {children}
      </div>
    </section>
  );
};

Columns.propTypes = {
  isStackedOnMobile: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
