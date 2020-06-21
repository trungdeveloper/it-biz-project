import eventReducer from "./event/reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    event: eventReducer
})

export default rootReducer;