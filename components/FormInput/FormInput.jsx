import PropTypes from 'prop-types';
import { Input } from 'components/FormInput/FormInput.styled';

export const FormInput = ({ type = 'text', placeholder = '', ...rest }) => {
  return <Input type={type} placeholder={placeholder} {...rest} />;
};

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
