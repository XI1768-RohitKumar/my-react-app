import { fork, all } from "redux-saga/effects";
import homeSaga from "./homeSaga";
import loginSaga from "./loginSaga";

export default function* rootSaga() {
  yield all([
    fork(homeSaga), fork(loginSaga)
  ]);
}