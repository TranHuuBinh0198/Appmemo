import { combineReducers } from "redux";
import saveMemo from "./saveMemo";
import addData from "./addData";
import searchMemo from "./searchMemo";
import sortMemo from "./sortMemo";
import id from "./getid";
import showAllMemo from "./showAllMemo"

const appReducers = combineReducers({
    saveMemo,
    addData,
    searchMemo,
    sortMemo,
    id,
    showAllMemo,
});

export default appReducers;
