import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./../actions/actionTypes";
import axios from "axios";

function* homeSaga() {
  yield takeLatest("GET_PHOTO_DATA", fetchPhotoData);
  yield takeLatest("GET_POST_DATA", fetchPostData);
  yield takeLatest("POST_COMMENT", getCommentDetails);
  yield takeLatest("SUBMIT_COMMENT", submitComment);
}

export const getList = (action) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/${action.payload}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("err", err);
    });
};

function* fetchPhotoData(action) {
  try {
    const response = yield call(getList, action);
    yield put({
      type: types.GET_PHOTO_DATA_SUCCESS,
      payload: response,
    });
  } catch (e) {
    console.log("e", e);
    yield put({
      type: types.GET_PHOTO_DATA_FAILURE,
      payload: e,
    });
  }
}

function* fetchPostData(action) {
  try {
    const response = yield call(getList, action);
    yield put({
      type: types.GET_POST_DATA_SUCCESS,
      payload: response,
    });
  } catch (e) {
    console.log("e", e);
    yield put({
      type: types.GET_POST_DATA_FAILURE,
      payload: e,
    });
  }
}

export const postComment = (action) => {
  console.log("action", action);
  return axios
    .get(
      `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("err", err);
    });
};

function* getCommentDetails(action) {
  try {
    const response = yield call(postComment, action);
    yield put({
      type: types.POST_COMMENT_SUCCESS,
      payload: response,
    });
  } catch (e) {
    console.log("e", e);
    yield put({
      type: types.POST_COMMENT_FAILURE,
      payload: e,
    });
  }
}

export const submitBody = (action) => {
  console.log("action", action);
  let params = {
    postId: action.payload.postid,
    name: action.payload.name,
    email: action.payload.email,
    body: action.payload.body,
  };

  return axios
    .post(
      `https://jsonplaceholder.typicode.com/comments`,
      params
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("err", err);
    });
};

function* submitComment(action) {
  try {
    const response = yield call(submitBody, action);
    yield put({
      type: types.SUBMIT_COMMENT_SUCCESS,
      payload: response,
    });
  } catch (e) {
    console.log("e", e);
    yield put({
      type: types.SUBMIT_COMMENT_FAILURE,
      payload: e,
    });
  }
}

export default homeSaga;
