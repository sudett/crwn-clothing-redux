import shopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isLoading: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case shopActionTypes.GET_COLLECTIONS:
    //   return {
    //     ...state,
    //     collections: action.payload,
    //   };

    // case shopActionTypes.TOGGLE_LOADING:
    //   return {
    //     ...state,
    //     isLoading: !state.isLoading,
    //   };

    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isLoading: true,
      };

    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        collections: action.payload,
      };

    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
