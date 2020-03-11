import * as Types from "../Constants/actionType";

var initialState = "";
const contentCategory = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH:
            state = action.keyword;
            return state;
        default:
            return state;
    }
};

export default contentCategory;