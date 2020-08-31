import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import eventReducer from "./event/reducer";
import authReducer from "./authentication/reducer";
import donationReducer from "./donation/reducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    event: eventReducer,
    auth: authReducer,
    donation: donationReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
