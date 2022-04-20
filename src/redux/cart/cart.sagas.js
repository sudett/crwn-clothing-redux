import { put, takeLatest, all, call } from "redux-saga/effects";

import { userActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";

function* clearCartOnSignout() {
  yield put(clearCart());
}

function* onSignoutSuccess() {
  yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCartOnSignout);
}

export default function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
