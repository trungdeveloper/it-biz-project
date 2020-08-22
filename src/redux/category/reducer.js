import * as types from "./type";

const initialState = {
    category: {},
    error: "",
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload,
            };
        case types.ADD_CATEGORY_FAILURE:
            return {
                ...state,
                isCate: false,
                error: action.error,
            };
        case types.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload,
            };
        case types.UPDATE_CATEGORY_FAILURE:
            return {
                ...state,
                isCate: false,
                error: action.error,
            };
        case types.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload,
            };
        default:
            return state;
    }
};

export default categoryReducer;
