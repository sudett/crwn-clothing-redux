import React from "react";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./shopping.styles.scss";

const ShoppingIcon = () => {
  return (
    <button className="shopping__button">
      <ShoppingBag className="shopping__bag" />
      <span className="shopping__quantity">0</span>
    </button>
  );
};

export default ShoppingIcon;
