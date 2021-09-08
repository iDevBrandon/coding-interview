import React, { useContext, useRef } from "react";
import { UserDispatch } from "./App";
import useInputs from "./useInputs";

const CreateUser = () => {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  };
  
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <button onClick={onCreate}>Submit</button>
    </div>
  );
};

export default React.memo(CreateUser);
