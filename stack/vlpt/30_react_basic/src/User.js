import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
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
        onClick={() => onToggle(user.id)}
      >
        {user.username} <span>({user.email})</span>
      </b>
      <button onClick={() => onRemove(user.id)}>X</button>
    </div>
  );
});

export default User;
