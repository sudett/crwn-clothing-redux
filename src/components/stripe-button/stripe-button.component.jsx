import React from "react";
import StripeCheckout from "react-stripe-checkout";

import crwnLogo from "../../assets/crown.svg";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51JywB3AVA7gsto47LK9TUr8lIJAvtVOPYxq98ydFqrYfjW1ko7BKbbYO90Jy0WXTgJGqttbGZZ7pvSjIdGLOosyh008ueT5ZC3";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={crwnLogo}
      description={`Your total payment is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
