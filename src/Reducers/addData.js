import * as Types from "../Constants/actionType";

var initialState = [];
const contentCategory = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_DATA:
            state.push(action.data)
            console.log(state);
            
            return [...state ] 
        default:
            return state;
    }
};

export default contentCategory;
