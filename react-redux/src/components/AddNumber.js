import React, { useState } from "react";

const AddNumber = (props) => {
  const [number, setNumber] = useState({ size: 1 });
  return (
    <div>
      <h1>Add Number</h1>
      <input
        type="button"
        value="+"
        onClick={function () {
          props.onClick(number);
        }}
      />
      <input
        type="text"
        value={number.size}
        onChange={function (e) {
          setNumber({ size: Number(e.target.value) });
        }}
      />
    </div>
  );
};

export default AddNumber;
