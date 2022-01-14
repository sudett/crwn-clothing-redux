import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
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
    </div>
  );
};

export default CollectionItem;
