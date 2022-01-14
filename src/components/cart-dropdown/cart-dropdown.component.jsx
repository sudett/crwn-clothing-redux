import React from "react";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();

  return (
    <div className="cart__dropdown">
      <div className="cart__items">
        <span className="cart__empty">Your cart is empty</span>
      </div>
      <button
        className="btn btn--inverted"
        onClick={() => navigate("/checkout")}
      >
        Go to checkout
      </button>
    </div>
  );
};

export default CartDropdown;
