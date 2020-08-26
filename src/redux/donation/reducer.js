import * as types from "./types";

const initialState = {
    donations: [],
    progress: null,
    error: null,
};

const donationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.POST_DONATION_SUCCESS:
            return {
                ...state,
                donations: [...action.payload],
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
        default:
            return state;
    }
};

export default donationReducer;
