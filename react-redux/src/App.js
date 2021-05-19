import React, { useState } from "react";
import AddNumberRoot from "./components/AddNumberRoot";
import "./App.css";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>Root</h1>
      <AddNumberRoot
        onClick={function (size) {
          setNumber({ number: number + size });
        }}
      ></AddNumberRoot>
      <DisplayNumberRoot number={number}></DisplayNumberRoot>
    </div>
  );
}

export default App;
