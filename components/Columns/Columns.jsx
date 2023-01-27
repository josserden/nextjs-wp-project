import PropTypes from 'prop-types';

export const Columns = ({ isStackedOnMobile, children }) => {
  return (
    <section className="py-10">
      <div
        className={`${
          isStackedOnMobile ? 'block md:flex' : 'flex'
        } mx-auto max-w-5xl`}
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
