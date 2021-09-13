import React from "react";

type StateProps = {
  state: "success" | "pending" | "error";
};

const Status = (props: StateProps) => {
  let message;

  if (props.state === "success") {
    message = "it's all done";
  } else if (props.state === "pending") {
    message = "Wait there!!!";
  } else {
    message = "Oh noooo";
  }
  return <div>Status - {message}</div>;
};

export default Status;
