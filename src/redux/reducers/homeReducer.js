import * as types from "../actions/actionTypes";
const INITIAL_STATE = {
  list: [],
  postList: [],
  postError: {},
  isLoading: false,
  error: {},
  postDetail: [],
  postComment: [],
  isCommentLoading: false,
  isErrorComment: {},
  submitData:undefined
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PHOTO_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PHOTO_DATA_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case types.GET_PHOTO_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.GET_POST_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_POST_DATA_SUCCESS:
      return {
        ...state,
        postList: action.payload,
        isLoading: false,
      };
    case types.GET_POST_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        postError: action.payload,
      };
    case types.SET_ITEM:
      return {
        ...state,
        postDetail: action.payload,
      };
    case types.RESET_ITEM:
      return {
        ...state,
        postDetail: [],
      };
    case types.POST_COMMENT:
      return {
        ...state,
        isCommentLoading: true,
      };
    case types.POST_COMMENT_SUCCESS:
      return {
        ...state,
        postComment: action.payload,
        isCommentLoading: false,
      };
    case types.POST_COMMENT_FAILURE:
      return {
        ...state,
        isCommentLoading: false,
        isErrorComment: action.payload,
        postComment: [],
      };
    case types.SUBMIT_COMMENT:
      return {
        ...state,
        loadingSubmit: true,
      };
    case types.SUBMIT_COMMENT_SUCCESS:
      return {
        ...state,
        isCommentLoading: false,
        submitData: action.payload,
      };
    case types.SUBMIT_COMMENT_FAILURE:
      return {
        ...state,
        loadingSubmit: false,
        isErrorComment: action.payload,
        submitData: [],
      };
    default:
      return state;
  }
};
