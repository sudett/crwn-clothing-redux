import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCart],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
