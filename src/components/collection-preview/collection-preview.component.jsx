import React from "react";
import { Link, useLocation } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, routeName }) => {
  const { pathname } = useLocation();

  return (
    <div className="collection__preview">
      <Link to={`${pathname}/${routeName}`}>
        <h2 className="collection__title">{title}</h2>
      </Link>
      <div className="collection__items">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
