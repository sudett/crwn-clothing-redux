import shopActionTypes from "./shop.types";

export const getCollections = (collections) => ({
  type: shopActionTypes.GET_COLLECTIONS,
  payload: collections,
});

export const toggleLoading = () => ({
  type: shopActionTypes.TOGGLE_LOADING,
});
