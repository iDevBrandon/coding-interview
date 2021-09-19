import React, { createContext, useReducer, useContext } from "react";
import * as api from "./api";
import createAsyncDispatcher, {
  createAsyncHandler,
  initialAsyncState,
} from "./asyncActionUtils";
const initialState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

// GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR,
// GET_USER, GET_USER_SUCCESS, GET_USER_ERROR
const usersHandler = createAsyncHandler("GET_USERS", "users");
const userHandler = createAsyncHandler("GET_USER", "user");

function usersReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
    case "GET_USERS_SUCCESS":
    case "GET_USERS_ERROR":
      return usersHandler(state, action);
    case "GET_USER":
    case "GET_USER_SUCCESS":
    case "GET_USER_ERROR":
        return userHandler(state, action);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useUsersState() {
  const state = useContext(UserStateContext);
  if (!state) {
    throw new Error("useUsersState must be used within a UserProvider");
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) {
    throw new Error("useUsersDispatch must be used within a UserProvider");
  }
  return dispatch;
}

// API 처리 함수 만들기

export const getUsers = createAsyncDispatcher("GET_USERS", api.getUsers);
export const getUser = createAsyncDispatcher("GET_USER", api.getUser);
