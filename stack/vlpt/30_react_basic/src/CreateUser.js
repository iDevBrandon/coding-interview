import React from "react";

const CreateUser = ({ username, email, onChange, onCreate }) => {
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

export default CreateUser;
