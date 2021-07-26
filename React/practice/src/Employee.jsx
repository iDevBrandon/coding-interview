import React from "react";

const Employee = (props) => {

  return (
    <div>
      <h1>
        Employee Name : {props.firstName} {props.lastName}
      </h1>
    </div>
  );
};

export default Employee;
