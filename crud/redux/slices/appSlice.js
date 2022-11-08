import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false, formId: undefined, deletedId: null },
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
    deleteDataAction: (state, action) => {
      state.client.deletedId = action.payload
    }
  },
});

const { reducer, actions } = AppSlice;
export const { toggleChangeAction, updateDataAction, deleteDataAction } = actions;
export default reducer;
