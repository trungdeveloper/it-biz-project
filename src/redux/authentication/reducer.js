import * as types from "./types";

const initialState = {
    user: {},
    error: "",
    logging: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                logging: false,
                user: action.payload,
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                logging: false,
                error: action.error,
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                logging: false,
                user: action.payload,
            };
        case types.REGISTER_FAILURE:
            return {
                ...state,
                logging: false,
                error: action.error.message,
            };
        default:
            return state;
    }
};

export default authReducer;
