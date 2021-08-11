import React, { useState } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("5");

  const addBookHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="add-book">
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={(e) => e.target.value} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" value={author} onChange={(e) => e.target.value} />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => e.target.value}
        />
      </div>
      <button onClick={addBookHandler}>Add book</button>
    </form>
  );
};

export default AddBook;
