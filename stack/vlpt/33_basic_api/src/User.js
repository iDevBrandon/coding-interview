import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setUsers([]);
        setError(false);
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Try again!</p>;
  if (!users) return null;

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          <h3>
            {user.username} - {user.name}
          </h3>
        </li>
      ))}
    </div>
  );
};

export default User;
