import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import User from "./User";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

const Users = () => {
  const [userId, setUserId] = useState(null);
  const {
    data: users,
    error,
    isLoading,
    reload,
  } = useAsync({
    promiseFn: getUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Try again!</p>;
  if (!users) return <button onClick={reload}>Reload</button>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} onClick={() => setUserId(user.id)}>
          <h3>
            {user.username} - {user.name}
          </h3>
        </div>
      ))}
      <button onClick={reload}>Re-fetch</button>
      {userId && <User id={userId} />}
    </div>
  );
};

export default Users;
