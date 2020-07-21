import eventReducer from "./event/reducer";
import { combineReducers } from "redux";
import authReducer from "./authentication/reducer";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    event: eventReducer,
    auth: authReducer,
    firebase: firebaseReducer,
});

export default rootReducer;
