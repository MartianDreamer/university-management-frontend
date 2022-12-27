import { loginSuccessAction } from "../actions/authentication";
import login from "../fetcher/authentication";
import { call, put } from "redux-saga/effects";

function* loginWithActionSaga(action) {
  const data = yield call(login, action.credential);
  return yield put(loginSuccessAction(data.data));
}

export default loginWithActionSaga;
