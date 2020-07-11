import eventReducer from "./event/reducer";
import { combineReducers } from "redux";
import userReducer from "./authentication/reducer";

const rootReducer = combineReducers({
    event: eventReducer,
    user: userReducer,
});

export default rootReducer;
