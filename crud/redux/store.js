import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/slices/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
