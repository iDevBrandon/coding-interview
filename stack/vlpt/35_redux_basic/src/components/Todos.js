import React, { useState } from "react";
import TodoList from "./TodoList";

const Todos = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="할일..."
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
};

export default Todos;
