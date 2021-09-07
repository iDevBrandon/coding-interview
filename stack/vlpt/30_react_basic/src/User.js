import React from "react";

const User = ({ user, onRemove, active, onToggle }) => {
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
};

export default User;
