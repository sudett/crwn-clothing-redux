import { takeLatest, put, all, call } from "redux-saga/effects";

import { userActionTypes } from "./user.types";
import {
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure,
  signupSuccess,
  signupFailure,
} from "./user.actions";

import supabase from "../../supabase/supabase";

////////////////////////////

// function* getSnapshotFromUserAuth(userAuth) {
//   try {
//     const userRef = yield call(createUserProfile, userAuth);

//     const userSnapshot = yield getDoc(userRef);

//     yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
//   } catch (err) {
//     yield put(signinFailure(err));
//   }
// }

// Google sign in
function* googleSignIn() {
  try {
    // firebase
    // const { user } = yield firebase.signInWithPopup(auth, googleProvider);

    // yield getSnapshotFromUserAuth(user);

    // supabase
    const { data, error } = yield supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) throw error;

    yield put(signinSuccess(data));
  } catch (err) {
    yield put(signinFailure(err));
  }
}

function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignIn);
}

// Email sign in
function* emailSignin({ payload: { email, password } }) {
  try {
    // firebase
    // const { user } = yield firebase.signInWithEmailAndPassword(
    //   auth,
    //   email,
    //   password
    // );

    // yield getSnapshotFromUserAuth(user);

    // supabase
    const { data, error } = yield supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    yield put(signinSuccess(data));
  } catch (err) {
    yield put(signinFailure(err));
  }
}

function* onEmailSigninStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSignin);
}

// Chcek user session
// function* isUserAuthenticated() {
//   try {
//     // firebase
//     // const userAuth = yield getCurrentUser();
//     // if (!userAuth) return;
//     // yield getSnapshotFromUserAuth(userAuth);
//     // yield put(signinSuccess(userAuth));

//   } catch (err) {
//     yield put(signinFailure(err));
//   }
// }

// function* onCheckUserSession() {
//   yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
// }

// Check current user
function* setAuthenticatedUser({ payload }) {
  try {
    if (!payload || !payload.user) return;
    yield put(signinSuccess(payload.user));
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* onCheckCurrentUser() {
  yield takeLatest(userActionTypes.SET_CURRENT_USER, setAuthenticatedUser);
}

// Sign out
function* signout() {
  try {
    // firebase
    // yield firebase.signOut(auth);
    // yield put(signoutSuccess());

    // supabase
    yield supabase.auth.signOut();

    yield put(signoutSuccess());
  } catch (err) {
    yield put(signoutFailure(err));
  }
}

function* onSignoutStart() {
  yield takeLatest(userActionTypes.SIGNOUT_START, signout);
}

// Sign up
function* signup({ payload: { displayName, email, password } }) {
  try {
    // firebase
    // const { user } = yield firebase.createUserWithEmailAndPassword(
    //   auth,
    //   email,
    //   password
    // );

    // const userRef = yield call(createUserProfile, user, { displayName });

    // const userSnapshot = yield getDoc(userRef);

    // yield put(signupSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));

    // supabase
    const { data, error } = yield supabase.auth.signUp({
      password,
      email,
      options: {
        data: {
          displayName,
        },
      },
    });

    if (error) throw error;

    yield put(
      signupSuccess({
        user: data.user,
      })
    );
  } catch (err) {
    yield put(signupFailure(err));
  }
}

function* onSignupStart() {
  yield takeLatest(userActionTypes.SIGNUP_START, signup);
}

// Signin user after registeration
function* signinAfterSignup({ payload: { user } }) {
  yield put(signinSuccess(user));
}

function* onSignupSuccess() {
  yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signinAfterSignup);
}

export default function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckCurrentUser),
    call(onSignoutStart),
    call(onSignupStart),
    call(onSignupSuccess),
  ]);
}
