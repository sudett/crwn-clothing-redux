import { takeLatest, put, all, call } from "redux-saga/effects";

import { userActionTypes } from "./user.types";
import { signinSuccess, signinFailure } from "./user.actions";

import firebase, {
  auth,
  googleProvider,
  createUserProfile,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import { getDoc } from "@firebase/firestore";

////////////////////////////

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfile, userAuth);

    const userSnapshot = yield getDoc(userRef);

    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signinFailure(err));
  }
}

// Google sign in
function* googleSignIn() {
  try {
    const { user } = yield firebase.signInWithPopup(auth, googleProvider);

    yield getSnapshotFromUserAuth(user);
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
    const { user } = yield firebase.signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signinFailure(err));
  }
}

function* onEmailSigninStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSignin);
}

// Chcek user session
function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(signinFailure(err));
  }
}

function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
  ]);
}
