import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false },
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
  },
});

const { reducer, actions } = AppSlice;
export const { toggleChangeAction } = actions;
export default reducer;
