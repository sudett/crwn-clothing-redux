import { takeLatest, call, put } from "redux-saga/effects";

import firebase, {
  convertSnapshotToObj,
  db,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "../../redux/shop/shop.actions";

import shopActionTypes from "./shop.types";

function* fetchCollectionsAsync() {
  try {
    const shopRef = firebase.collection(db, "shop");

    const snapshot = yield firebase.getDocs(shopRef);

    const shopObj = yield call(convertSnapshotToObj, snapshot);

    yield put(fetchCollectionsSuccess(shopObj));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
