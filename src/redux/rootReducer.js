import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import eventReducer from "./event/reducer";
import authReducer from "./authentication/reducer";
import donationReducer from "./donation/reducer";
import { firestoreReducer } from "redux-firestore";
import plightReducer from "./plight/reducer";

import categoryReducer from "./admin/category/reducer";
import adminDonationReducer from "./admin/donation/reducer";
import eventReducerAdmin from "./admin/event/reducer";
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    event: eventReducer,
    auth: authReducer,
    donation: donationReducer,
    plight: plightReducer,
    cate: categoryReducer,
    adminDonation: adminDonationReducer,
    eventAdmin: eventReducerAdmin,
});

export default rootReducer;
