import eventReducer from "./event/reducer";
import sponsorReducer from "./sponsor/reducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    event: eventReducer,
    sponsor: sponsorReducer,
});

export default rootReducer;
