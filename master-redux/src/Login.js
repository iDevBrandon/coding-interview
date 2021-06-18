import React from "react";

const Login = ({ setUser }) => {
  const loginToApp = () => {
    // Do some login stuff
    setUser("iDevBrandon");
  };

  return (
    <div>
      <h1>I am the login component</h1>
      <button onClick={loginToApp}>Login</button>
    </div>
  );
};

export default Login;
