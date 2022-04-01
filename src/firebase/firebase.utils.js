import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8vlwlrRoQPAe6BiM3-Xyh7LtJeGdMI2g",
  authDomain: "crwn-redux.firebaseapp.com",
  projectId: "crwn-redux",
  storageBucket: "crwn-redux.appspot.com",
  messagingSenderId: "799547588311",
  appId: "1:799547588311:web:7cbea1d8cadf0610e57a92",
  measurementId: "G-RYVZSM5ZV1",
};

initializeApp(firebaseConfig);

// Sign in with google
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ propmt: "select_account" });

export const auth = getAuth();

export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider)
    .then(() => console.log("Sign in with Google"))
    .catch((err) => {
      const { code, message } = err;
      console.error(`${message} (${code})`);
    });

// Sign out
export const signout = () =>
  signOut(auth)
    .then(() => console.log("User signed out"))
    .catch((err) => {
      const { code, message } = err;
      console.error(`${message} (${code})`);
    });

// Store user data in firestore
const db = getFirestore();

export const createUserProfile = async (userAuth, additionalData) => {
  // If there is no userAuth (signed out user), no need to create profile
  if (!userAuth) return;

  // Get user reference(location) in database
  const userRef = doc(db, "users", userAuth.uid);

  try {
    // Get snapshot(data) in the user reference
    const userSnapshot = await getDoc(userRef);

    // Save user in database if we didn't save before
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    }
  } catch (err) {
    console.error(err);
  }

  return userRef;
};

const firebase = {
  onSnapshot,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
export default firebase;
