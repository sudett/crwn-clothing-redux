import { createSelector } from "reselect";

const selectHome = (state) => state.home;

export const selectHomeItems = createSelector(
  [selectHome],
  (home) => home.items
);
