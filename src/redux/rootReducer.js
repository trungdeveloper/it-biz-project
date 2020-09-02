import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import eventReducer from "./event/reducer";
import authReducer from "./authentication/reducer";
import donationReducer from "./donation/reducer";
import { firestoreReducer } from "redux-firestore";
import plightReducer from "./plight/reducer";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    event: eventReducer,
    auth: authReducer,
    donation: donationReducer,
    plight: plightReducer,
});

export default rootReducer;
