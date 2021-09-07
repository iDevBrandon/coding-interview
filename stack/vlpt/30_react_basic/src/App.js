import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChnage = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const [users, setUsers] = useState([
    { id: 1, email: "Bilbo@baggins.com", username: "bilbo", active: true },
    { id: 2, email: "Frodo@baggins.com", username: "frodo", active: false },
    { id: 3, email: "Samwise@gamgee.com", username: "sam", active: false },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });
    // console.log(nextId.current); // 4
    nextId.current += 1;
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChnage}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
};

export default App;
