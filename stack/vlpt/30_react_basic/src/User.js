import React from "react";

const User = ({ user, onRemove }) => {
  return (
    <div>
      <b>
        {user.username} <span>({user.email})</span>
        <button onClick={() => onRemove(user.id)}>X</button>
      </b>
    </div>
  );
};

export default User;
