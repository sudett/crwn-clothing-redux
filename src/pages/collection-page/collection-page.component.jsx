import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import {
  selectCollections,
  selectIsLoading,
} from "../../redux/shop/shop.selectors";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionItem from "../../components/collection-item/collection-item.component";
import Spinner from "../../components/spinner/spinner.component";

import "./collection-page.styles.scss";

const CollectionPage = ({ collections, isLoading, fetchCollectionsStart }) => {
  const { collectionSlug } = useParams();
  const [collection, setCollection] = useState(null);

  //1. Observer pattern
  // useEffect(() => {
  //   if (collections) return;

  //   toggleLoading();

  //   const shopRef = firebase.collection(db, "shop");

  //   const unSubscribeFromSnapshot = firebase.onSnapshot(
  //     shopRef,
  //     async (snapshot) => {
  //       //conver snapshot array to object
  //       const shopObj = convertSnapshotToObj(snapshot);

  //       //fire getCollection action to fill the collections in reducer
  //       getCollections(shopObj);

  //       toggleLoading();
  //     }
  //   );

  //   // unsubscribe to observable, to prevent memory leaks
  //   return () => unSubscribeFromSnapshot();
  // }, [getCollections, toggleLoading, collections]);

  //2. Thunk
  // useEffect(() => {
  //   fecthCollectionsAsync();
  // }, [fecthCollectionsAsync]);

  //3. Saga
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  useEffect(() => {
    collections && setCollection(collections[collectionSlug]);
  }, [collections, collectionSlug]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="collection__page">
          <h1 className="collection__title--center">{collection?.title}</h1>
          <div className="collection__items">
            {collection?.items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  // getCollections: (collections) => dispatch(getCollections(collections)),
  // toggleLoading: () => dispatch(toggleLoading()),
  // fecthCollectionsAsync: () => dispatch(fecthCollectionsAsync()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
