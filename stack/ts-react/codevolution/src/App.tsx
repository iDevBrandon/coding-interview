import React from "react";
import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Input from "./components/Input";
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
      <Button handleClick={(event, id) => console.log("clicked", event, id)} />
      <Input value="" handleChange={(event) => console.log(event)}></Input>
    </div>
  );
}

export default App;
