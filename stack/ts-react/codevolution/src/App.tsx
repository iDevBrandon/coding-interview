import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personname = {
    firstname: "John",
    lastname: "Doe",
  };

  const nameList = [
    { first: "princess", last: "diana" },
    { first: "john", last: "doe" },
    { first: "jane", last: "aoe" },
  ];

  return (
    <div className="App">
      <Greet name="brandon" messageCount={10} isLoggedIn={false} />
      <Person name={personname} />
      <PersonList names={nameList} />
      <Status state="success" />
    </div>
  );
}

export default App;
