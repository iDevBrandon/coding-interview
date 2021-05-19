import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({ toDos }) => {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
  }
  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </div>
  );
};

// give state from store (getCurrentState = mapStateToProps )
function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
