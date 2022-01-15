import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ imageUrl, name, price, quantity }) => (
  <div className="cart-item">
    <img className="cart-item__img" src={imageUrl} alt="item" />
    <div className="cart-item__details">
      <span className="cart-item__name">{name}</span>
      <span className="cart-item__price">
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
