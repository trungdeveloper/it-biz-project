import eventReducer from "./event/reducer";
import plightReducer from "./plight/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    event: eventReducer,
    plight: plightReducer,
});

export default rootReducer;
