import { useState } from 'react';
import { FormInput } from 'components';
import {
  FiltersContainer,
  Form,
  CheckboxLabel,
  LabelText,
} from './Filters.styled';

export const Filters = ({ onSearch }) => {
  const [hasParking, setHasParking] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();

    onSearch({
      hasParking,
      petFriendly,
      minPrice,
      maxPrice,
    });
  };

  return (
    <FiltersContainer>
      <Form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <CheckboxLabel>
            <FormInput
              type="checkbox"
              className="grow-1"
              checked={hasParking}
              onChange={() => setHasParking(!hasParking)}
            />
            <LabelText className="shrink">Has parking</LabelText>
          </CheckboxLabel>

          <CheckboxLabel>
            <FormInput
              type="checkbox"
              className="grow-1"
              checked={petFriendly}
              onChange={() => setPetFriendly(!petFriendly)}
            />
            <LabelText className="shrink">Pet friendly</LabelText>
          </CheckboxLabel>
        </div>

        <div className="flex items-center justify-center gap-5">
          <label className="relative">
            <LabelText className="absolute -top-6 left-2">Min price</LabelText>
            <FormInput
              type="number"
              className="w-80"
              placeholder="Min price"
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
            />
          </label>

          <LabelText className="relative">
            <LabelText className="absolute -top-6 left-2">Max price</LabelText>
            <FormInput
              type="number"
              className="w-80"
              placeholder="Max price"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
            />
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
