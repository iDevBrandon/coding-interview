import React from "react";
import { ThemeContextProvider } from "./components/context/ThemeContext";

import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Input from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Box from "./components/context/Box";

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
    <ThemeContextProvider>
      <Greet name="brandon" messageCount={10} isLoggedIn={false} />
      <Person name={personname} />
      <PersonList names={nameList} />
      <Status state="success" />
      <Button handleClick={(event, id) => console.log("clicked", event, id)} />
      <Input value="" handleChange={(event) => console.log(event)}></Input>
      <Container styles={{ display: "flex" }}></Container>
      <Box />
    </ThemeContextProvider>
  );
}

export default App;
