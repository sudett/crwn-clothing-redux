import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout__item">
      <img className="checkout__item-image" src={imageUrl} alt="item" />
      <span>{name}</span>
      <div className="quantity-container">
        <button className="btn-decrease">&#10094;</button>
        <span className="checkout__item-quantity">{quantity}</span>
        <button className="btn-increase">&#10095;</button>
      </div>
      <span>${price}</span>
      <button className="btn-remove">&#10005;</button>
    </div>
  );
};

export default CheckoutItem;
