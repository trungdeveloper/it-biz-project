import * as types from "./types";
import { Upload } from "../util/upload";

export const addPlight = (plight, image, props) => {
    return (dispatch) => {
        Upload(
            props,
            "plight",
            plight,
            image,
            dispatch,
            loadingProcess,
            postSuccess,
            postFailure
        );
    };
};

export const loadingProcess = (progress) => {
    return {
        type: types.POST_PLIGHT_PROGRESS,
        progress,
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
