import React, { useReducer, createContext } from "react";

const initialState = [
  { id: 1, text: "Learn React", done: false },
  { id: 2, text: "Learn Redux", done: true },
  { id: 3, text: "Learn React Native", done: false },
  { id: 4, text: "Learn GraphQL", done: true },
];

// reducer (CREATE, TOGGLE, REMOVE)
const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

const TodoContext = () => {
  return <div></div>;
};

export default TodoContext;
