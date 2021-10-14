import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createReducer from './toolkitReducers';

const rootReducer = combineReducers({
    toolkit: createReducer
})

export const store = configureStore({
    reducer: rootReducer
})