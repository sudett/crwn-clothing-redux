import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

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
