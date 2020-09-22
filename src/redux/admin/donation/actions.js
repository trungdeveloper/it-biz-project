import * as types from "./type";
import { Upload, UpdateUploadDonation } from "../util/upload";

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
export const updateDonation = (data, image, firebaseActions, callback) => {
    return (dispatch) => {
        UpdateUploadDonation(
            data,
            image,
            "/donation",
            firebaseActions,
            callback,
            dispatch,
            UpdateDonateSuccess,
            UpdateDonateFailure
        );
    };
};
export const acceptDonation = (donation, id, props) => {
    return (dispatch) => {
        props.firestore
            .collection("donation")
            .doc(id)
            .update(donation)
            .then(() => {
                dispatch({ type: types.UPDATE_DONATION_SUCCESS });
            })
            .catch((err) => {
                dispatch({ type: types.UPDATE_DONATION_SUCCESS, err });
            });
    };
};
export const UpdateDonateSuccess = (data) => {
    return {
        type: types.UPDATE_DONATION_SUCCESS,
        payload: data,
    };
};

export const UpdateDonateFailure = (error) => {
    return {
        type: types.UPDATE_DONATION_FAILURE,
        error: error,
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

export const deleteDonation = (id, ownProps) => {
    return (dispatch) => {
        ownProps.firestore
            .collection("donation")
            .doc(id)
            .delete()
            .then(() => dispatch({ type: types.DELETE_DONATION_SUCCESS }))
            .catch((err) => {
                dispatch({ type: types.POST_DONATION_FAILURE, err });
            });
    };
};
