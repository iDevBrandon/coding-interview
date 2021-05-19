import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const addTodo = (text) => {
  // store.dispatch({ type: "ADD_TODO", text });
  return {
    type: "ADD_TODO",
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.text, id: Date.now() }];
    case "DELETE_TODO":
      return state.filter((toDo) => toDo.id !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DELETE";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintTodos);

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

form.addEventListener("submit", onSubmit);
