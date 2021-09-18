import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoProvider";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 32px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  // 1. check how many tasks are left
  const todos = useTodoState();
  const undones = todos.filter((todo) => !todo.done);

  // 2. change today's date
  let today = new Date();
  const dateString = today.toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleString("en-GB", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1>{dateString} </h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">Left {undones.length} more</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
