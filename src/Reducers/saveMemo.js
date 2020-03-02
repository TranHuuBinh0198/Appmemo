import * as Types from "../Constants/actionType";

var initialState = {};
const contentCategory = (state = initialState, action) => {
    switch (action.type) {
        case Types.SAVE_DATA_TO_STORE:
            state = action.dataSavetamp;
            
            return { ...state };
        default:
            return state;
    }
};

export default contentCategory;
