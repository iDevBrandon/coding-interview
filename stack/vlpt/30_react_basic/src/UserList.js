import React, { useEffect } from "react";
import User from "./User";

function UserList({ users, onRemove, onToggle }) {
  useEffect(() => {
    console.log("Mount on the screen");
    // return cleaner ()
    return () => {
      console.log("Unmount from the screen");
    };
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
