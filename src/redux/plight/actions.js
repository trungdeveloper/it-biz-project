import * as types from "./types";

export const addPlight = (plight, props) => {
    return (dispatch) => {
        props.firestore
            .collection("plight")
            .add(plight)
            .then(() => dispatch(postSuccess(plight)))
            .catch((err) => dispatch(postFailure(err)));
    };
};

export const postSuccess = (data) => {
    return {
        type: types.POST_PLIGHT_SUCCESS,
        payload: data,
    };
};

export const postFailure = (error) => {
    return {
        type: types.POST_PLIGHT_FAILURE,
        error: error,
    };
};
