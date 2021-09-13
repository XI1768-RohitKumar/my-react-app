import * as types from "../actions/actionTypes";
const INITIAL_STATE = {
    list: [],
    postList: [],
    postError: {},
    isLoading: false,
    error: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_PHOTO_DATA:
            return {
                ...state,
                isLoading: true
            };
        case types.GET_PHOTO_DATA_SUCCESS:
            console.log("hii", action.payload)
            return {
                ...state,
                list: action.payload,
                isLoading: false
            };
        case types.GET_PHOTO_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case types.GET_POST_DATA:
            return {
                ...state,
                isLoading: true
            };
        case types.GET_POST_DATA_SUCCESS:
            console.log("hii", action.payload)
            return {
                ...state,
                postList: action.payload,
                isLoading: false
            };
        case types.GET_POST_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                postError: action.payload
            };
        default:
            return state;

    }
};
