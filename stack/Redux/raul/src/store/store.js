import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import authReducer from "./slices/authSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/index";

// const store = configureStore({
//   reducer: { books: bookReducer, auth: authReducer },
// });

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
