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
export const deleteFolder = createAction("DELETEFOLDER");
export const deleteFile = createAction("DELETEFILE");
export const renameFolder = createAction("REANMEFOLDER");
export const renameFile = createAction("RENAMEFILE");

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
    },
    [deleteFolder]: (state, action) => {
        state.folders = state.folders.filter(folder => folder.id !== action.payload)
    },
    [deleteFile]: (state, action) => {
        state.files = state.files.filter(file => file.id !== action.payload)
    },
    [renameFolder]: (state, action) => {
        state.folders = [
            {
                name: action.payload,
                id: uuidv4()
            }
        ]
    },
    [renameFile]: (state, action) => {
        state.files = [
            {
                name: action.payload,
                id: uuidv4()
            }
        ]
    }
});

//486eea5a-b5a0-4d3d-ba28-14c038b7d7d8
//fff0899a-05cf-4317-9454-8a6aa012b7c2