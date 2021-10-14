import uuidv4 from "./../utils/utils";
import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    folders: [],
    files: [],
    isOpened: true
}
export const openedCreateScope = createAction("OPENEDCREATESCOPE");
export const closedCreateScope = createAction("CLOSEDCREATESCOPE");
export const addFolderList = createAction("ADDFOLDERLIST");
export const addFileList = createAction("ADDFILELIST");

export default createReducer(initialState, {

    [openedCreateScope]: (state) => {
        state.isOpened = true
    },
    [closedCreateScope]: (state) => {
        state.isOpened = false
    },
    [addFolderList]: (state, action) => {
        state.folders = [
            ...state.folders,
            {
                name: action.payload,
                id: uuidv4()
            }
        ]
    },
    [addFileList]: (state, action) => {
        state.files = [
            ...state.files,
            {
                name: action.payload,
                id: uuidv4()
            }
        ]
    }
});
