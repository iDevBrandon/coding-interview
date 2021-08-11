// export const ADD_BOOK = "ADD_BOOK";

// // action creator function
// export const AddBook = (payload) => {
//   return {
//     type: ADD_BOOK,
//     payload,
//   };
// };

import { createAction } from "@reduxjs/toolkit";

export const addBook = createAction("addBook");
export const deleteBook = createAction("deleteBook");
