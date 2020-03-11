import * as Types from "../Constants/actionType";
import callApi from "../utils/apiCaller";

// add data for Memo
export const actSaveDatatoStore = dataSavetamp => {
    return {
        type: Types.SAVE_DATA_TO_STORE,
        dataSavetamp
    };
};


export const actAddMemo = data => {
    return {
        type: Types.ADD_DATA,
        data
    };
};

export const searchTask = (keyword)=>{
    return {
        type : Types.SEARCH,
        keyword
    }
}

export const sortTask = (sort)=>{
    return {
        type : Types.SORT,
        sort
    }
}

export const actshowContent = (id)=>{
    return {
        type : Types.GET_ID,
        id
    }
}

export const resultCallapiDataRequest = () => {
    return dispatch => {
        return callApi("addData", "GET", null).then(res => {
            if (res.data) {
                dispatch(resultCallapiData(res.data));
            }
        });
    };
};

export const resultCallapiData=(data)=>{
    return {
        type : Types.PUSH_DATA,
        data
    }
}

export const actPushDataRequest = (data) => {
    return dispatch => {
         callApi("addData", "POST", data).then(res => {
            console.log(res.data);
            
            if (res.data) {
                dispatch(actPushData(res.data));
            }
        });
    };
};

export const actPushData = (data)=>{
    return {
        type : Types.ADD_DATA,
        data
    }
};

export const actShowAllMemo = ()=>{
    return {
        type : Types.SHOW_ALL_MEMO,
    }
};

export const actShowCategory=(data)=>{
    return {
        type: Types.SHOW_CATEGORY,
        payload : {
            data
        }
    }
}