import { GET_USER_DATA, SUBMIT_LOGIN } from "./actionTypes";

export const getUserData = (type) => ({
  type: GET_USER_DATA,
  payload: type
});

export const submitLogin = (email, password) => ({
    type: SUBMIT_LOGIN,
    payload: {email, password}
  });