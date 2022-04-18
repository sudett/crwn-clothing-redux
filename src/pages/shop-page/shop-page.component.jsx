import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import firebase, {
  db,
  convertSnapshotToObj,
} from "../../firebase/firebase.utils";

import {
  selectCollectionsForShop,
  selectIsLoading,
} from "../../redux/shop/shop.selectors";

import { getCollections, toggleLoading } from "../../redux/shop/shop.actions";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const ShopPage = ({
  collections,
  getCollections,
  toggleLoading,
  isLoading,
}) => {
  useEffect(() => {
    toggleLoading();

    //get shop collection location in db
    const shopRef = firebase.collection(db, "shop");

    const unSubscribeFromSnapshot = firebase.onSnapshot(
      shopRef,
      async (snapshot) => {
        //conver snapshot array to object
        const shopObj = convertSnapshotToObj(snapshot);

        //fire getCollection action to fill the collections in reducer
        getCollections(shopObj);

        toggleLoading();
      }
    );

    // Close subscription to prevent memory leaks
    return () => unSubscribeFromSnapshot();
  }, [getCollections, toggleLoading]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        collections.map((collection) => (
          <CollectionPreview key={collection.id} {...collection} />
        ))
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForShop,
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCollections: (collections) => dispatch(getCollections(collections)),
  toggleLoading: () => dispatch(toggleLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
