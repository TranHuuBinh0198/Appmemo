import * as Types from "../Constants/actionType";


var initialState = [];
const contentCategory = (state = initialState, action) => {
    switch (action.type) {
        case Types.PUSH_DATA:
            state = action.data;
            return [...state]
        case Types.ADD_DATA:
            console.log(action);
            var Data = {
                Date:action.data.Date,
                category: action.data.category,
                title: action.data.title,
                content: action.data.content,
                id: action.data.id
            }
            state.push(Data)
            // console.log(state);
            
            return [...state ] 
        default:
            return state;
    }
};

export default contentCategory;
