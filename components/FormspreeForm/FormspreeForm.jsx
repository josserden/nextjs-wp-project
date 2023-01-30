import { Input } from 'components/FormInput/FormInput.styled';
import React from 'react';

export const FormspreeForm = () => {
  return (
    <Input $as={'textarea'} name="message" placeholder="Message" rows="5" />
  );
};
