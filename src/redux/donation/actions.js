import * as types from "./types";
import { Upload } from "../util/upload";

export const donateRequest = (donation, image, props) => {
    return (dispatch) => {
        Upload(
            props,
            "donation",
            donation,
            image,
            dispatch,
            loadingProcess,
            donateSuccess,
            donateFailure
        );
    };
};

export const donateSuccess = (data) => {
    return {
        type: types.POST_DONATION_SUCCESS,
        payload: data,
    };
};

export const loadingProcess = (progress) => {
    return {
        type: types.POST_DONATION_PROGRESS,
        progress,
    };
};

export const donateFailure = (error) => {
    return {
        type: types.POST_DONATION_FAILURE,
        error: error,
    };
};
