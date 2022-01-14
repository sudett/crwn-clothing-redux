import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { selectCollections } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection-page.styles.scss";

const CollectionPage = ({ collections }) => {
  const { collectionSlug } = useParams();
  const collection = collections[collectionSlug];

  return (
    <div className="collection__page">
      <h1 className="collection__title--center">{collection.title}</h1>
      <div className="collection__items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(CollectionPage);
