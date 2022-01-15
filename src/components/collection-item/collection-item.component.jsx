import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addToCart }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection__item">
      <div
        className="collection__back-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection__content">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <button
        className="btn btn--inverted btn--cart"
        onClick={() => addToCart(item)}
      >
        Add to cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
