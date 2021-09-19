import React from "react";
import axios from "axios";
import useAsync from "./useAsync";

async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

const User = ({ id }) => {
  const [state] = useAsync(() => getUser(id), [id]);
  const { loading, data: user, error } = state;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;
