import { takeLatest, call, put, all } from "redux-saga/effects";

import supabase from "../../supabase/supabase";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "../../redux/shop/shop.actions";

import shopActionTypes from "./shop.types";

///////////////////////////////////////

function* fetchCollectionsAsync() {
  try {
    // firebase
    // const shopRef = firebase.collection(db, "shop");

    // const snapshot = yield firebase.getDocs(shopRef);

    // const shopObj = yield call(convertSnapshotToObj, snapshot);

    // supabase
    const { data } = yield supabase.from("shopping items").select();

    yield put(fetchCollectionsSuccess(data));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export default function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
