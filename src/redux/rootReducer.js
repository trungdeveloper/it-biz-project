import eventReducer from "./event/reducer";
import { combineReducers } from "redux";
import authReducer from "./authentication/reducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import categoryReducer from "./category/reducer";
const rootReducer = combineReducers({
    event: eventReducer,
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    cate: categoryReducer,
});

export default rootReducer;
