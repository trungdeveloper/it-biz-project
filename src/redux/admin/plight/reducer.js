import * as types from "./type";

const initialState = {
    plight: {},
    error: "",
    progress: null,
};

const adminPlightReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.ADD_CATEGORY_SUCCESS:
        //     return {
        //         ...state,
        //         category: action.payload,
        //     };
        // case types.ADD_CATEGORY_FAILURE:
        //     return {
        //         ...state,
        //         isCate: false,
        //         error: action.error,
        //     };
        case types.DELETE_PLIGHT_SUCCESS:
            return {
                ...state,
                plight: action.payload,
            };
        // case types.UPDATE_CATEGORY_FAILURE:
        //     return {
        //         ...state,
        //         category: action.payload,
        //     };
        // case types.UPDATE_CATEGORY_SUCCESS:
        //     return {
        //         ...state,
        //         error: action.error,
        //     };
        case types.UPDATE_PLIGHT_SUCCESS:
            return {
                ...state,
                plight: action.payload,
                error: null,
                progress: null,
            };
        case types.UPDATE_PLIGHT_FAILURE:
            return {
                ...state,
                error: action.error,
                progress: null,
            };
        case types.UPDATE_PLIGHT_PROGRESS:
            return {
                ...state,
                progress: action.progress,
            };
        case types.GET_PLIGHT_SUCCESS:
            return {
                ...state,
                plight: action.payload,
            };

        case types.POST_PLIGHT_SUCCESS:
            return {
                ...state,
                plight: action.payload,
                error: null,
                progress: null,
            };
        case types.POST_PLIGHT_FAILURE:
            return {
                ...state,
                error: action.error,
                progress: null,
            };
        case types.POST_PLIGHT_PROGRESS:
            return {
                ...state,
                progress: action.progress,
            };
        default:
            return state;
    }
};

export default adminPlightReducer;
