import React from "react";

type GreetingsProps = {
  name: string;
  mark?: string;
  optional?: string;
  onClick: (name: string) => void; // 함수타입인데, 아무것도 return 하지 않는다
};

const Greetings: React.FC<GreetingsProps> = ({
  name,
  mark = "!",
  optional,
  onClick,
}) => {
  const handleClick = () => onClick(name);

  return (
    <div>
      Hello, {name} {mark}
      {optional && <div>{optional}</div>}
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Greetings;
