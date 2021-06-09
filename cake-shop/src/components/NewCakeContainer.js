import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
};

// step 1. create a function
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// Step 2.  involves defining a new function
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

// step 3. connect these two functions with our react comopoent

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
