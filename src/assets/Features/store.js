import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from './slice';
import notesSlice from './slice1'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage
};
const store=combineReducers({
  movies: moviesReducer,
  notes: notesSlice
})
const persistedReducer = persistReducer(persistConfig, store);
const store1=configureStore({
    reducer:persistedReducer,
})
export default store1;

// export default configureStore({
//   reducer: {
//     movies: moviesReducer,
//   },
// });
