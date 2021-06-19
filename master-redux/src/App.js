import React from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [state, dispatch] = useStateValue();

  return (
    <div className="app">
      <h1>This is my fancy fb app component - level 0</h1>
      <h3>
        {state.user
          ? `The user logged in is ${state.user}`
          : `No user is logged in`}
      </h3>
      <Login />
    </div>
  );
}

export default App;
