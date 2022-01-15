import React from "react";
import { connect } from "react-redux";

import {
  addToCart,
  removeFromCart,
  clearFromCart,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  addToCart,
  removeFromCart,
  clearFromCart,
}) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout__item">
      <img className="checkout__item-image" src={imageUrl} alt="item" />
      <span>{name}</span>
      <div className="quantity-container">
        <button
          className="btn-decrease"
          onClick={() => removeFromCart(cartItem)}
        >
          &#10094;
        </button>
        <span className="checkout__item-quantity">{quantity}</span>
        <button className="btn-increase" onClick={() => addToCart(cartItem)}>
          &#10095;
        </button>
      </div>
      <span>${price}</span>
      <button className="btn-remove" onClick={() => clearFromCart(cartItem)}>
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
  clearFromCart: (item) => dispatch(clearFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
