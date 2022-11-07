import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false },
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
  },
});

export const { toggleChangeAction } = AppSlice.actions;

export default AppSlice.reducer;
