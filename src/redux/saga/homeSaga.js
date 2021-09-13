import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./../actions/actionTypes";
import axios from 'axios';

function* homeSaga() {
  yield takeLatest("GET_PHOTO_DATA", fetchPhotoData);
  yield takeLatest("GET_POST_DATA", fetchPostData);
}

export const getList = (action) => {
    console.log("saga", action);
 return axios.get(`https://jsonplaceholder.typicode.com/${action.payload}`)
 .then(res => {
   return res.data
 }).catch(err=>{
    console.log("err",err)
 })
    
};

function* fetchPhotoData(action) {
  try {
    const response = yield call(getList, action);
    yield put({
      type: types.GET_PHOTO_DATA_SUCCESS,
      payload: response,
    });
  } catch (e) {
      console.log("e",e)
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
        console.log("e",e)
      yield put({
        type: types.GET_POST_DATA_FAILURE,
        payload: e,
      });
    }
  }

export default homeSaga;
