import cartActionTypes from "./cart.types";

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART,
});

export const addToCart = (item) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: cartActionTypes.REMOVE_FROM_CART,
  payload: item,
});

export const clearFromCart = (item) => ({
  type: cartActionTypes.CLEAR_FROM_CART,
  payload: item,
});
