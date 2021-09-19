import React, { useEffect } from "react";
import { useUsersState, useUsersDispatch, getUser } from "./UsersContext";

const User = ({ id }) => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { data: user, loading, error } = state.user;

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
