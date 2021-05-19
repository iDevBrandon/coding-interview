import React from "react";
import DisplayNumber from "./DisplayNumber";

const DisplayNumberRoot = (props) => {
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber number={props.number}></DisplayNumber>
    </div>
  );
};

export default DisplayNumberRoot;
