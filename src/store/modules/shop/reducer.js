import { ADD_CART, REMOVE_CART } from "./actionTypes";

const cartState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case REMOVE_CART:
      const filteredState = state.filter((prd) => prd.id !== action.product.id);
      return filteredState;

    default:
      return state;
  }
};

export default cartReducer;
