import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case userActionTypes.SET_CURRENT_USER:
    //   return {
    //     ...state,
    //     currentUser: action.payload,
    //   };

    case userActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: action.payload,
      };

    case userActionTypes.SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
