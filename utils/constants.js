export const PAGE_SIZE = 3;

export const initialState = {
  hasParking: false,
  petFriendly: false,
  minPrice: '',
  maxPrice: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'hasParking':
      return {
        ...state,
        hasParking: !state.hasParking,
      };
    case 'petFriendly':
      return {
        ...state,
        petFriendly: !state.petFriendly,
      };
    case 'minPrice':
      return {
        ...state,
        minPrice: action.payload,
      };
    case 'maxPrice':
      return {
        ...state,
        maxPrice: action.payload,
      };
    default:
      return state;
  }
};
