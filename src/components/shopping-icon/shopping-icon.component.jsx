import React from "react";
import { connect } from "react-redux";

import { selectItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCart } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./shopping.styles.scss";

const ShoppingIcon = ({ toggleCart, itemsCount }) => {
  return (
    <button className="shopping__button" onClick={toggleCart}>
      <ShoppingBag className="shopping__bag" />
      <span className="shopping__quantity">{itemsCount}</span>
    </button>
  );
};

const mapStateToProps = (state) => ({
  itemsCount: selectItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingIcon);
