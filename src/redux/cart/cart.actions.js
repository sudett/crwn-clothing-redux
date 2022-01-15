import cartActionTypes from "./cart.types";

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART,
});

export const addToCart = (item) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item,
});
