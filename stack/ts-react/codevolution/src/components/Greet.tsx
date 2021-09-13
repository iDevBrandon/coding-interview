import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `<h2>
        Welcome ${props.name}! you have ${props.messageCount} messages in your
        inbox
      </h2>`
        : "Hello guest"}
    </div>
  );
};

export default Greet;
