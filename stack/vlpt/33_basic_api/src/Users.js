import React, { useState } from "react";
import User from "./User";
import { getUsers, useUsersDispatch, useUsersState } from "./UsersContext";

const Users = () => {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Try again!</p>;
  if (!users) return <button onClick={fetchData}>Reload</button>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} onClick={() => setUserId(user.id)}>
          <h3>
            {user.username} - {user.name}
          </h3>
        </div>
      ))}
      <button onClick={fetchData}>Re-fetch</button>
      {userId && <User id={userId} />}
    </div>
  );
};

export default Users;
