import {
  loginFailedAction,
  loginSuccessAction,
} from "../actions/authentication";
import login from "../fetcher/authentication";
import { call, put } from "redux-saga/effects";

function* loginWithActionSaga(action) {
  try {
    const data = yield call(login, action.credential);
    return yield put(loginSuccessAction(data.data));
  } catch (error) {
    return yield put(loginFailedAction(error));
  }
}

export default loginWithActionSaga;
