import PropTypes from 'prop-types';

export const Column = ({ children, width, backgroundColor, textColor }) => {
  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor
    ? { backgroundColor: backgroundColor }
    : {};

  return (
    <div
      style={{
        ...widthStyle,
        ...textColorStyle,
        ...backgroundColorStyle,
      }}
      className="px-2 py-5"
    >
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
