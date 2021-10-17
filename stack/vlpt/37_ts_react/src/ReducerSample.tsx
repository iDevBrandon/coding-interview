import React from "react";
import { useSampleDispatch, useSampleState } from "./SampleContext";

const ReducerSample = () => {
  const dispatch = useSampleDispatch();
  const state = useSampleState();

  const setCount = () => dispatch({ type: "SET_COUNT", count: 1 });
  const setText = () => dispatch({ type: "SET_TEXT", text: "bye" });
  const setColor = () => dispatch({ type: "SET_COLOR", color: "blue" });
  const setToggle = () => dispatch({ type: "TOGGLE_GOOD" });

  return (
    <div>
      <p>
        <code>Count: </code> {state.count}
        <code>Text: </code> {state.text}
        <code>Color: </code> {state.color}
        <code>isGood: </code> {state.isGood ? "true" : "false"}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={setToggle}>SET_TOGGLE</button>
      </div>
    </div>
  );
};

export default ReducerSample;
