import shopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isLoading: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    case shopActionTypes.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
};

export default shopReducer;
