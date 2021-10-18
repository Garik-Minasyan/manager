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
                name: action.payload.nameFolder,
                direction: action.payload.locationPatname,
                id: uuidv4(),
                type: 'folder',
            },
        ]
    },
    [addFileList]: (state, action) => {
        state.files = [
            ...state.files,
            {
                name: action.payload,
                id: uuidv4(),
                type: 'file'
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