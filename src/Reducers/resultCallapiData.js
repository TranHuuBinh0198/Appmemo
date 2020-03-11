// import * as Types from "../Constants/actionType";
// import moment from "moment";

// const initialState = [];
// var findIndex = (tasks, id) => {
//     var result = -1;
//     tasks.forEach((task, index) => {
//         if (task.id === id) {
//             result = index;
//         }
//     });
//     return result;
// };

// const myReducer = (state = initialState, action) => {
//     var index = -1;
//     switch (action.type) {
//         case Types.RESULT_CALLAPI_DATA:
//             state = action.dataFetch;
//             return [...state];
        // case Types.ADD_DATA:
        //     var today = moment(new Date());

        //     var task = {
        //         Date:
        //             action.dataAdd.Date === null
        //                 ? (action.dataAdd.Date = today.format(
        //                       "YYYY/MM/DD"
        //                   ))
        //                 : action.dataAdd.Date,
        //         category: action.dataAdd.category,
        //         title: action.dataAdd.title,
        //         content: action.dataAdd.content,
        //         id: action.dataAdd.id,
        //     };
        //     state.push(task);
        //     return [...state];
        // case Types.DELETE_NODE:
        //     index = findIndex(state, action.id);
        //     state.splice(index, 1);
        //     return [...state];
        // case Types.UPDATE_NODE:
        //     index = findIndex(state, action.node.id);
        //     state[index] = action.node;
        //     return [...state];
        // case Types.CLIP_NODE:
        //     index = findIndex(state, action.dataclip.id);
        //     // action.dataclip.clip = action.dataclip.clip;
        //     state[index] = action.dataclip;
        //     return [...state];
//         default:
//             return state;
//     }
// };

// export default myReducer;
