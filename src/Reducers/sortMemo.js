import * as Types from "../Constants/actionType";

var initialState = {
    sortby : "",
    value : 1,
};
const contentCategory = (state = initialState, action) => {
    switch (action.type) {
        case Types.SORT:
            return {
                value : action.payload.sort.value,
                sortby : action.payload.sort.sortby
            };
        default:
            return state;
    }
};

export default contentCategory;