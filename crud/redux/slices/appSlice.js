import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false, formId: undefined },
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
    updateDataAction: (state, action) => {
      state.client.formId = action.payload;
    },
  },
});

const { reducer, actions } = AppSlice;
export const { toggleChangeAction, updateDataAction } = actions;
export default reducer;
