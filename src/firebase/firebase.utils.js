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
  getDocs,
  setDoc,
  collection,
  writeBatch,
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
export const googleProvider = new GoogleAuthProvider();

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
export const db = getFirestore();

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

// Store data in firestore
export const addCollectionAndDocuments = async (
  collectionName,
  collectionDocuments
) => {
  const collectionRef = collection(db, collectionName);

  //create batch for storing multiple documents at once
  const batch = writeBatch(db);

  collectionDocuments.forEach((document) => {
    //create new reference with unique key, in db for document
    const newDocRef = doc(collectionRef);

    //store document in created reference
    batch.set(newDocRef, document);
  });

  //write documents in collection
  return await batch.commit();
};

// Convert snapshots array into object
export const convertSnapshotToObj = (snapshot) => {
  const transformedSnapshot = snapshot.docs.map((doc) => {
    //getting actual data in snapshot
    const { title, items } = doc.data();

    //add routeName and id to objects
    return {
      title,
      items,
      routeName: title.toLowerCase(),
      id: doc.id,
    };
  });

  //final object required in frontend
  return transformedSnapshot.reduce((acc, item) => {
    acc[item.title.toLowerCase()] = item;
    return acc;
  }, {});
};

// Get current user state using promise pattern (this will be cunsuming by saga)
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
      unsubscribeFromAuth();
      resolve(userAuth);
    }, reject);
  });
};

const firebase = {
  onSnapshot,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  collection,
  getDocs,
  getDoc,
  signOut,
};
export default firebase;
