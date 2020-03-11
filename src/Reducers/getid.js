import * as Types from "../Constants/actionType";

var initialState = null;
const contentCategory = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ID:
            return action.id;
        default:
            return state;
    }
};

export default contentCategory;
