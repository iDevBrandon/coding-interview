import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => setCount(count + 1);
  const decreaseHandler = () => setCount(count - 1);

  return (
    <div>
      <p>The count is : {count}</p>
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
    </div>
  );
};

export default Counter;
