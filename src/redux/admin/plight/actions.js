import * as types from "./type";
import { Upload, UpdateUploadPlight } from "../util/upload";

export const plightRequest = (plight, image, props) => {
    return (dispatch) => {
        Upload(
            props,
            "plight",
            plight,
            image,
            dispatch,
            loadingProcess,
            plightSuccess,
            plightFailure
        );
    };
};
export const updatePlight = (data, image, firebaseActions, callback) => {
    return (dispatch) => {
        UpdateUploadPlight(
            data,
            image,
            "/plight",
            firebaseActions,
            callback,
            dispatch,
            UpdatePlightSuccess,
            UpdatePlightFailure
        );
    };
};
export const acceptPlight = (plight, id, props) => {
    return (dispatch) => {
        props.firestore
            .collection("plight")
            .doc(id)
            .update(plight)
            .then(() => {
                dispatch({ type: types.UPDATE_PLIGHT_SUCCESS });
            })
            .catch((err) => {
                dispatch({ type: types.UPDATE_PLIGHT_SUCCESS, err });
            });
    };
};
export const UpdatePlightSuccess = (data) => {
    return {
        type: types.UPDATE_PLIGHT_SUCCESS,
        payload: data,
    };
};

export const UpdatePlightFailure = (error) => {
    return {
        type: types.UPDATE_PLIGHT_FAILURE,
        error: error,
    };
};

export const plightSuccess = (data) => {
    return {
        type: types.POST_PLIGHT_SUCCESS,
        payload: data,
    };
};

export const loadingProcess = (progress) => {
    return {
        type: types.POST_PLIGHT_PROGRESS,
        progress,
    };
};

export const plightFailure = (error) => {
    return {
        type: types.POST_PLIGHT_FAILURE,
        error: error,
    };
};

export const deletePlight = (id, ownProps) => {
    return (dispatch) => {
        ownProps.firestore
            .collection("plight")
            .doc(id)
            .delete()
            .then(() => dispatch({ type: types.DELETE_PLIGHT_SUCCESS }))
            .catch((err) => {
                dispatch({ type: types.POST_PLIGHT_FAILURE, err });
            });
    };
};
