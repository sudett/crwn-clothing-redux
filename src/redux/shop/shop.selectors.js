import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => {
  return shop.collections ? shop.collections : null;
});

export const selectCollectionsForShop = createSelector([selectShop], (shop) => {
  return shop.collections ? Object.values(shop.collections) : [];
});

export const selectIsLoading = createSelector(
  [selectShop],
  (shop) => shop.isLoading
);
