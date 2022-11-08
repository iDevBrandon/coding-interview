import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/slices/appSlice";
import listenerMiddleware from "./listener";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});
