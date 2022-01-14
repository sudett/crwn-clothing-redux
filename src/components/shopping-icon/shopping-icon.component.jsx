import React from "react";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./shopping.styles.scss";

const ShoppingIcon = ({ toggleCart }) => {
  return (
    <button className="shopping__button" onClick={toggleCart}>
      <ShoppingBag className="shopping__bag" />
      <span className="shopping__quantity">0</span>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(ShoppingIcon);
