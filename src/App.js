import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import ShopLayout from "./pages/shop-layout/shop-layout.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import CollectionPage from "./pages/collection-page/collection-page.component";
import SigninPage from "./pages/signin-page/signin-page.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";

import "./App.css";

function App() {
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
      </Routes>
    </>
  );
}

export default App;
