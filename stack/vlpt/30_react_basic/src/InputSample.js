import React, { useState, useRef } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const initHandler = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input name="nickname" type="text" onChange={onChange} value={nickname} />
      <button onClick={initHandler}>Submit</button>
      <span>Value:</span>
      {name} : ({nickname})
    </div>
  );
};

export default InputSample;
