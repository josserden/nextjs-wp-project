import React from 'react';
import { FormInput } from 'components';
import {
  FiltersContainer,
  Form,
  CheckboxLabel,
  LabelText,
} from './Filters.styled';

export const Filters = () => {
  return (
    <FiltersContainer>
      <Form>
        <div className="flex flex-col gap-1">
          <CheckboxLabel>
            <FormInput type="checkbox" className="grow-1" />
            <LabelText className="shrink">Has parking</LabelText>
          </CheckboxLabel>

          <CheckboxLabel>
            <FormInput type="checkbox" className="block" />
            <LabelText className="shrink">Pet friendly</LabelText>
          </CheckboxLabel>
        </div>

        <div className="flex items-center justify-center gap-5">
          <label className="relative">
            <LabelText className="absolute -top-6 left-2">Min price</LabelText>
            <FormInput type="number" className="w-80" placeholder="Min price" />
          </label>

          <LabelText className="relative">
            <LabelText className="absolute -top-6 left-2">Max price</LabelText>
            <FormInput type="number" className="w-80" placeholder="Max price" />
          </LabelText>
        </div>

        <div className="flex items-center">
          <button type="submit" className="btn">
            Search
          </button>
        </div>
      </Form>
    </FiltersContainer>
  );
};
