import * as types from "./types";

export const loginRequest = (credentials, props) => {
    return (dispatch) => {
        props.firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch(loginSuccess(credentials));
            })
            .catch((err) => {
                dispatch(loginFailure("login fail"), err);
            });
    };
};

export const loginSuccess = (data) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: data,
    };
};

export const loginFailure = (error) => {
    return {
        type: types.LOGIN_FAILURE,
        error: error,
    };
};

export const register = (newUser, props) => {
    return (dispatch) => {
        props.firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((res) => {
                props.firestore.collection("users").doc(res.user.uid).set({
                    username: newUser.name,
                    address: newUser.address,
                    phone: newUser.phone,
                });
            })
            .then(() => {
                dispatch(registerSuccess(newUser));
            })
            .catch((err) => {
                dispatch(registerFailure(err));
            });
    };
};

export const registerSuccess = (data) => {
    return {
        type: types.REGISTER_SUCCESS,
        payload: data,
    };
};

export const registerFailure = (error) => {
    return {
        type: types.REGISTER_FAILURE,
        error: error,
    };
};

export const logout = (props) => {
    return (dispatch) => {
        props.firebase
            .auth()
            .signOut()
            .then(() => {
                props.firebase.logout();
                dispatch({ type: "SIGNOUT_SUCCESS" });
            });
    };
};
