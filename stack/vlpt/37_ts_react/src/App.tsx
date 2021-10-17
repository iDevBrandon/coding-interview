import React from "react";
import "./App.css";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

function App() {
  return (
    <div className="App">
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </div>
  );
}

export default App;
