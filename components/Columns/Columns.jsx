import PropTypes from 'prop-types';

export const Columns = ({
  isStackedOnMobile,
  children,
  backgroundColor,
  textColor,
}) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor
    ? { backgroundColor: backgroundColor }
    : {};
  return (
    <section
      className="py-10"
      style={{
        ...textColorStyle,
        ...backgroundColorStyle,
      }}
    >
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
