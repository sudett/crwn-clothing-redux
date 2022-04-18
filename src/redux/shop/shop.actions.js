import shopActionTypes from "./shop.types";

import firebase, {
  db,
  convertSnapshotToObj,
} from "../../firebase/firebase.utils";

// export const getCollections = (collections) => ({
//   type: shopActionTypes.GET_COLLECTIONS,
//   payload: collections,
// });

// export const toggleLoading = () => ({
//   type: shopActionTypes.TOGGLE_LOADING,
// });

const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fecthCollectionsAsync = () => {
  return (dispatch) => {
    const shopRef = firebase.collection(db, "shop");

    dispatch(fetchCollectionsStart());

    firebase
      .getDocs(shopRef)
      .then((snapshot) => {
        const shopObj = convertSnapshotToObj(snapshot);
        dispatch(fetchCollectionsSuccess(shopObj));
      })
      .catch(({ message }) => dispatch(fetchCollectionsFailure(message)));
  };
};
