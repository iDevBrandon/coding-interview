// middleware
// To listen toggle change action

import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toggleChangeAction, updateDataAction } from "./slices/appSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: toggleChangeAction,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(updateDataAction(action.payload));
  },
});

export default listenerMiddleware;
