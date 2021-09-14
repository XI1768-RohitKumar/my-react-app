import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./../actions/actionTypes";
import axios from 'axios';

function* loginSaga() {
  yield takeLatest("GET_USER_DATA", fetchUserData);
}

export const getUserList = (action) => {
 return axios.get(`https://jsonplaceholder.typicode.com/${action.payload}`)
 .then(res => {
   return res.data
 }).catch(err=>{
    console.log("err",err)
 })
    
};

function* fetchUserData(action) {
  try {
    const response = yield call(getUserList, action);
    yield put({
      type: types.GET_USER_DATA_SUCCESS,
      payload: response,
    });
  } catch (e) {
      console.log("e",e)
    yield put({
      type: types.GET_USER_DATA_FAILURE,
      payload: e,
    });
  }
}

export default loginSaga;