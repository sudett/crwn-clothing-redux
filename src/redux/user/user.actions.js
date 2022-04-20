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

// Sign out
export const signoutStart = () => ({
  type: userActionTypes.SIGNOUT_START,
});

export const signoutSuccess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS,
});

export const signoutFailure = (error) => ({
  type: userActionTypes.SIGNOUT_FAILURE,
  payload: error,
});

// Sign up
export const signupStart = (userCredentials) => ({
  type: userActionTypes.SIGNUP_START,
  payload: userCredentials,
});

export const signupSuccess = (user) => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: userActionTypes.SIGNUP_FAILURE,
  payload: error,
});
