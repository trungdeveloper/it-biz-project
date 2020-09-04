import * as types from "./types";

const initialState = {
    plights: [],
    progress: null,
    error: null,
};

const plightReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.POST_PLIGHT_SUCCESS:
            return {
                ...state,
                plights: [...state.plights, action.payload],
                error: null,
                progress: 100,
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

export default plightReducer;
