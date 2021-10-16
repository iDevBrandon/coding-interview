import React from "react";
import "./App.css";
import Greetings from "./Greetings";

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };

  return (
    <div className="App">
      <Greetings name="bran" onClick={onClick} />
    </div>
  );
}

export default App;
