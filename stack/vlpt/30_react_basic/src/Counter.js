import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const Counter = () => {
  const [number, dispatch] = useReducer(reducer, 0);

  const handleIncrease = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
    </div>
  );
};

export default Counter;
