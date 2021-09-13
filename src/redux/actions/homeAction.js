import { GET_PHOTO_DATA, GET_POST_DATA } from "./actionTypes";

export const getPhotoData = (type) => ({
  type: GET_PHOTO_DATA,
  payload: type
});

export const getPostData = (type) => ({
    type: GET_POST_DATA,
    payload: type
});