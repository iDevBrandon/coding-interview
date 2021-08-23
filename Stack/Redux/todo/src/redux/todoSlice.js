import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// createAsyncThunk is a function that returns a function. Thunk is a new action that can be dispatched.
// when the response is completed from the api call, the thunk will be dispatched.

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const response = await fetch("http://localhost:7000/todos");
    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date(),
        title: action.payload.title,
        completed: false,
      };

      state.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },

  extraReducers: {
    // thunk will dispatch a number of actions based on the response from the api call.
    [getTodosAsync.pending]: (state, action) => {
      console.log("Data is being fetched from API");
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log("Here your data is!");
      return action.payload.todos;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
