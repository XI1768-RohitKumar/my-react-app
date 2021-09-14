import { GET_PHOTO_DATA, GET_POST_DATA,SET_ITEM,RESET_ITEM,POST_COMMENT,SUBMIT_COMMENT } from "./actionTypes";

export const getPhotoData = (type) => ({
  type: GET_PHOTO_DATA,
  payload: type
});

export const getPostData = (type) => ({
    type: GET_POST_DATA,
    payload: type
});

export const setItem = (item) => ({
  type: SET_ITEM,
  payload: item
});

export const resetItem = () => ({
  type: RESET_ITEM,
});

export const getCommentList = (id) => ({
  type: POST_COMMENT,
  payload:id
});
export const submitComment = (postid, email,body, name) => ({
  type: SUBMIT_COMMENT,
  payload:{postid, email,body, name}
});


