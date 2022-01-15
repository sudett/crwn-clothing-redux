import cartActionTypes from "./cart.types";
import { addItem } from "./cart.utils";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
