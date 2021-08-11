import { configureStore } from "@reduxjs/toolkit";
import dummaryReducer from "./dummaryReducer";

const store = configureStore({
  reducer: { dummy: dummaryReducer },
});

export default store;
