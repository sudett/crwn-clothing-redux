import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  const navigate = useNavigate();

  return (
    <div className="cart__dropdown">
      <div className="cart__items">
        {cartItems.length === 0 ? (
          <span className="cart__empty">Your cart is empty</span>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))
        )}
      </div>
      <button className="btn btn--black" onClick={() => navigate("/checkout")}>
        Go to checkout
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
