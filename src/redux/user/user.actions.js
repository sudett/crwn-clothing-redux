import { userActionTypes } from "./user.types";

// export const setCurrentUser = (user) => ({
//   type: userActionTypes.SET_CURRENT_USER,
//   payload: user,
// });

// Google & email sign in
export const googleSigninStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSigninStart = (emailAndPass) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPass,
});

export const signinSuccess = (user) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signinFailure = (error) => ({
  type: userActionTypes.SIGNIN_FAILURE,
  payload: error,
});

// Check user state persistence
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});
