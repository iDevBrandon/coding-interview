import React, { useEffect, useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => dispatch({ type: "TOGGLE_USER", id: user.id })}
      >
        {user.username} <span>({user.email})</span>
      </b>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}>
        X
      </button>
    </div>
  );
});

export default User;
