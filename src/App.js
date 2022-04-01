import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import firebase, { auth, createUserProfile } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import ShopLayout from "./pages/shop-layout/shop-layout.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import CollectionPage from "./pages/collection-page/collection-page.component";
import SigninPage from "./pages/signin-page/signin-page.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";

import "./App.css";
import "./global-styles.scss";

function App({ setCurrentUser }) {
  useEffect(() => {
    // Get auth state changes using subscription provided by firebase
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) return setCurrentUser(userAuth);

      // Store user in db
      const userRef = await createUserProfile(userAuth);

      // Store user in app
      firebase.onSnapshot(userRef, (snapshot) => {
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data(),
        });
      });
    });

    // Close subscription to prevent memory leaks
    return () => unSubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopLayout />}>
          <Route index element={<ShopPage />} />
          <Route path=":collectionSlug" element={<CollectionPage />} />
        </Route>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
