import React, { useReducer } from "react";

const initalState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initalState;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initalState);

  return (
    <>
      <div>
        <div>Count = {count}</div>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
      <div>
        <div>Count Two = {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </>
  );
};

export default CounterThree;
