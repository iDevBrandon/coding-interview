import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0, action) => {
  if (action.type === "add") {
    return count + 1;
  }
  return count;
};

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({ type: "add" }); //dispatch (action)
