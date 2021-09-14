import * as types from "../actions/actionTypes";
const INITIAL_STATE = {
  userList: [],
  error: {},
  isLoading: false,
  result: [],
  loginError: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_USER_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        isLoading: false,
      };
    case types.GET_USER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.SUBMIT_LOGIN:
      let data = [];
      if (state.userList.length) {
        state.userList.filter((ele, idx) => {
          if (
            ele.email === action.payload.email &&
            ele.address.zipcode === action.payload.password
          ) {
            data.push(ele);
          }

        });
      }
      if(data.length>0){
        return {
            ...state,
            result: data,
            loginError: null,
          };
      }
      else if(data.length===0){
        return {
            ...state,
            result: [],
            loginError: "No User Found!",
          };
      }
      return {
        ...state,
        result: data,
        loginError: null,
      };
    default:
      return state;
  }
};
