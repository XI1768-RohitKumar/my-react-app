import { fork, all } from "redux-saga/effects";
import homeSaga from "./homeSaga";

export default function* rootSaga() {
  yield all([
    fork(homeSaga),
  ]);
}