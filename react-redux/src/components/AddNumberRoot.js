import React from "react";
import AddNumber from "./AddNumber";

const AddNumberRoot = (props) => {
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber
        onClick={function (size) {
          props.onClick(size);
        }}
      ></AddNumber>
    </div>
  );
};

export default AddNumberRoot;
