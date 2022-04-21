import React from "react";
import { connect } from "react-redux";

import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import "./checkout-page.styles.scss";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout__page">
    <div className="checkout__title-container">
      <div className="checkout__title-item">Product</div>
      <div className="checkout__title-item">Discription</div>
      <div className="checkout__title-item">Quantity</div>
      <div className="checkout__title-item">Price</div>
      <div className="checkout__title-item">Remove</div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <p className="checkout__total-price">Total: ${totalPrice}</p>
    <div className="checkout__payment">
      <p className="checkout__test-message">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 09/23 - CVV: 123
      </p>
      <StripeButton className="checkout__button" price={totalPrice} />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  totalPrice: selectTotalPrice(state),
});

export default connect(mapStateToProps)(CheckoutPage);
