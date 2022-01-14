import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForShop } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({ collections }) => {
  return (
    <>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForShop,
});

export default connect(mapStateToProps)(ShopPage);
