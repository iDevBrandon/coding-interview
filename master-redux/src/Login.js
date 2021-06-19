import React from "react";
import useStateValue from "./StateProvider";

const Login = ({ setUser }) => {
  const [state, dispatch] = useStateValue();
  const loginToApp = () => {
    // Do some login stuff
    dispatch({
      type: "SET_USER",
      user: "iDevBrandon",
    });
  };

  return (
    <div>
      <h1>I am the login component</h1>
      <button onClick={loginToApp}>Login</button>
    </div>
  );
};

export default Login;
