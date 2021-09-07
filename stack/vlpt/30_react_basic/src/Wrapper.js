import React from "react";

const Wrapper = (props) => {
  const style = {
    border: "2px solid black",
    padding: "10px",
  };
  return <div style={style}>{props.children}</div>;
};

export default Wrapper;
