import * as types from "./type";

const initialState = {
    donation: {},
    error: "",
    progress: null,
};

const adminDonationReducer = (state = initialState, action) => {
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
        case types.DELETE_DONATION_SUCCESS:
            return {
                ...state,
                donation: action.payload,
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
        case types.UPDATE_DONATION_SUCCESS:
            return {
                ...state,
                donation: action.payload,
                error: null,
                progress: null,
            };
        case types.UPDATE_DONATION_FAILURE:
            return {
                ...state,
                error: action.error,
                progress: null,
            };
        case types.UPDATE_DONATION_PROGRESS:
            return {
                ...state,
                progress: action.progress,
            };
        case types.GET_DONATION_SUCCESS:
            return {
                ...state,
                donation: action.payload,
            };

        case types.POST_DONATION_SUCCESS:
            return {
                ...state,
                donation: action.payload,
                error: null,
                progress: null,
            };
        case types.POST_DONATION_FAILURE:
            return {
                ...state,
                error: action.error,
                progress: null,
            };
        case types.POST_DONATION_PROGRESS:
            return {
                ...state,
                progress: action.progress,
            };
        case types.GET_DONATION_SUCCESS:
            return {
                ...state,
                donation: action.payload,
            };
        default:
            return state;
    }
};

export default adminDonationReducer;
