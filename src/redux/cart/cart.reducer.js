import cartActionTypes from "./cart.types";

const INITIAL_STATE = {
  isCartOpen: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    default:
      return state;
  }
};

export default cartReducer;
