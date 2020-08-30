import * as types from "./type";
import { Upload, UpdateUploadEvent } from "../util/upload";

export const eventRequest = (event, image, props) => {
    return (dispatch) => {
        Upload(
            props,
            "event",
            event,
            image,
            dispatch,
            loadingProcess,
            eventSuccess,
            eventFailure
        );
    };
};
export const updateEvent = (data, image, firebaseActions, callback) => {
    return (dispatch) => {
        UpdateUploadEvent(
            data,
            image,
            "/event",
            firebaseActions,
            callback,
            dispatch,
            UpdateEventSuccess,
            UpdateEventFailure
        );
    };
};

export const UpdateEventSuccess = (data) => {
    return {
        type: types.UPDATE_EVENT_SUCCESS,
        payload: data,
    };
};

export const UpdateEventFailure = (error) => {
    return {
        type: types.UPDATE_EVENT_FAILURE,
        error: error,
    };
};

export const eventSuccess = (data) => {
    return {
        type: types.POST_EVENT_SUCCESS,
        payload: data,
    };
};

export const loadingProcess = (progress) => {
    return {
        type: types.POST_EVENT_PROGRESS,
        progress,
    };
};

export const eventFailure = (error) => {
    return {
        type: types.POST_EVENT_FAILURE,
        error: error,
    };
};

export const deleteEvent = (id, ownProps) => {
    return (dispatch) => {
        ownProps.firestore
            .collection("event")
            .doc(id)
            .delete()
            .then(() => dispatch({ type: types.DELETE_EVENT_SUCCESS }))
            .catch((err) => {
                dispatch({ type: types.POST_EVENT_FAILURE, err });
            });
    };
};
