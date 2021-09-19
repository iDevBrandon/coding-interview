import React from "react";
import axios from "axios";
import { useAsync } from "react-async";

async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

const User = ({ id }) => {
  const {
    data: user,
    error,
    isLoading,
  } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
  });

  if (isLoading) return <p>Loading...</p>;
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
