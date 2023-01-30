import { useReducer, useEffect } from 'react';
import queryString from 'query-string';
import { FormInput } from 'components';
import { reducer, initialState } from 'utils/constants';
import {
  FiltersContainer,
  Form,
  CheckboxLabel,
  LabelText,
} from './Filters.styled';

export const Filters = ({ onSearch }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const { search } = window.location;
    const { hasParking, petFriendly, minPrice, maxPrice } =
      queryString.parse(search);

    if (hasParking === 'true') {
      dispatch({ type: 'hasParking' });
      state.hasParking = true;
    }

    if (petFriendly === 'true') {
      dispatch({ type: 'petFriendly' });
      state.petFriendly = true;
    }

    if (minPrice) {
      dispatch({ type: 'minPrice', payload: minPrice });
    }

    if (maxPrice) {
      dispatch({ type: 'maxPrice', payload: maxPrice });
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    onSearch(state);
  };

  return (
    <FiltersContainer>
      <Form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <CheckboxLabel>
            <FormInput
              type="checkbox"
              className="grow-1"
              checked={state.hasParking}
              onChange={() => dispatch({ type: 'hasParking' })}
            />
            <LabelText className="shrink">Has parking</LabelText>
          </CheckboxLabel>

          <CheckboxLabel>
            <FormInput
              type="checkbox"
              className="grow-1"
              checked={state.petFriendly}
              onChange={() => dispatch({ type: 'petFriendly' })}
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
              value={state.minPrice}
              onChange={e =>
                dispatch({ type: 'minPrice', payload: e.target.value })
              }
            />
          </label>

          <LabelText className="relative">
            <LabelText className="absolute -top-6 left-2">Max price</LabelText>
            <FormInput
              type="number"
              className="w-80"
              placeholder="Max price"
              value={state.maxPrice}
              onChange={e =>
                dispatch({ type: 'maxPrice', payload: e.target.value })
              }
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
