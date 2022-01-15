import cartActionTypes from "./cart.types";
import { addItem, removeItem, clearItem } from "./cart.utils";

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

    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };

    case cartActionTypes.CLEAR_FROM_CART:
      return {
        ...state,
        cartItems: clearItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
