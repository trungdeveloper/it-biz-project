import * as types from "./type";

const initialState = {
    event: {},
    error: "",
    progress: null,
};

const eventReducerAdmin = (state = initialState, action) => {
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
        case types.DELETE_EVENT_SUCCESS:
            return {
                ...state,
                event: action.payload,
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
        case types.UPDATE_EVENT_SUCCESS:
            return {
                ...state,
                event: action.payload,
                error: null,
                progress: null,
            };
        case types.UPDATE_EVENT_FAILURE:
            return {
                ...state,
                error: action.error,
                progress: null,
            };
        case types.UPDATE_EVENT_PROGRESS:
            return {
                ...state,
                progress: action.progress,
            };
        case types.GET_EVENT_SUCCESS:
            return {
                ...state,
                event: action.payload,
            };

        case types.POST_EVENT_SUCCESS:
            return {
                ...state,
                event: action.payload,
                error: null,
                progress: null,
            };
        case types.POST_EVENT_FAILURE:
            return {
                ...state,
                error: action.error,
                progress: null,
            };
        case types.POST_EVENT_PROGRESS:
            return {
                ...state,
                progress: action.progress,
            };
        // eslint-disable-next-line no-duplicate-case
        // case types.GET_EVENT_SUCCESS:
        //     return {
        //         ...state,
        //         event: action.payload,
        //     };
        default:
            return state;
    }
};

export default eventReducerAdmin;
