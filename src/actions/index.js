import * as Types from "../Constants/actionType";

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