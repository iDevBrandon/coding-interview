import React from "react";

const User = ({ user, onRemove }) => {
  return (
    <div>
      <b>
        {user.username} <span>({user.email})</span>
        <small onClick={onRemove}>X</small>
      </b>
    </div>
  );
};

export default User;
