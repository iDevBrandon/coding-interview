import React, { useState } from "react";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      <h1>This is my fancy fb app component - level 0</h1>
      <h3>{user ? `The user logged in is ${user}` : `No user is logged in`}</h3>
      <Login setUser={setUser} />
    </div>
  );
}

export default App;
