import * as types from "./types";

export const loginRequest = (credentials, props) => {
    return (dispatch) => {
        props.firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                props.firebase.auth().currentUser.emailVerified
                    ? dispatch(loginSuccess(credentials))
                    : props.firebase.auth().signOut();
                dispatch(loginFailure("Vui lòng xác nhận email để đăng nhập"));
            })
            .catch((err) => {
                dispatch(loginFailure("Đăng nhập thất bại"), err);
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
                const user = props.firebase.auth().currentUser;
                user.sendEmailVerification()
                    .then(() => {
                        !props.firebase.auth().currentUser.emailVerified &&
                            props.firebase.auth().signOut();
                        dispatch(registerSuccess(newUser));
                    })
                    .catch((err) => {
                        dispatch(registerFailure(err));
                    });
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
