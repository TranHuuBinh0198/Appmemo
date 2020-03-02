import { combineReducers } from "redux";
import saveMemo from "./saveMemo";
import addData from "./addData";

const appReducers = combineReducers({
    saveMemo,
    addData
});

export default appReducers;
