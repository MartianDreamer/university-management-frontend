import { all, takeEvery } from "redux-saga/effects";
import loginWithAction from "./authentication";
import { LOGIN } from "../constants/authentication";

function* rootSaga() {
  yield all([takeEvery(LOGIN, loginWithAction)]);
}

export default rootSaga;
