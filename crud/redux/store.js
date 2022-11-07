// import { configureStore } from "@reduxjs/toolkit";
// import AppReducer from "./slices/appSlice";

// const rootReducer = {
//   app: AppReducer,
// };

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducer'

export const store = configureStore({
    reducer : {
        app : Reducer
    }
})
