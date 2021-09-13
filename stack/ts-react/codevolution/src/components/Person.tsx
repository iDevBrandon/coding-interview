import React from "react";

type PersonProps = {
  name: {
    firstname: string;
    lastname: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <h1>
        {props.name.firstname} {props.name.lastname}
      </h1>
    </div>
  );
};

export default Person;
