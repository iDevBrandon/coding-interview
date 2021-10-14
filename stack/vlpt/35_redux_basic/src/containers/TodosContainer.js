import React, { useCallback } from "react";
import Todos from "../components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

const TodosContainer = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

  return (
    <div>
      <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    </div>
  );
};

export default TodosContainer;
