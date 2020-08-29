import eventReducer from "./event/reducer";
import { combineReducers } from "redux";
import authReducer from "./authentication/reducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import categoryReducer from "./admin/category/reducer";
import donationReducer from "./admin/donation/reducer";
const rootReducer = combineReducers({
    event: eventReducer,
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    cate: categoryReducer,
    donation: donationReducer,
});

export default rootReducer;
