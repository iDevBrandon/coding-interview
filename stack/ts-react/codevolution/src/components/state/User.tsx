import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, SetUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    SetUser({
      name: "brandon",
      email: "bran@gmail.com",
    });
  };
  const handleLogout = () => {
    SetUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;
