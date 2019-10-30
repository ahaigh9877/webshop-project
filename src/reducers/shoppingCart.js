import { ADD_TO_CART } from "../actions/addToCart";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state, { ...action.payload }];
    }
    default: {
      return state;
    }
  }
};
