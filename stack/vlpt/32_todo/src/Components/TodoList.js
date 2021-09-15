import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="proejct setup" done={false} />
      <TodoItem text="styling" done={true} />
      <TodoItem text="context work" done={false} />
      <TodoItem text="apply redux" done={true} />
    </TodoListBlock>
  );
};

export default TodoList;
