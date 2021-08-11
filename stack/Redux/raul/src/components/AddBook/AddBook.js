import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/actions/bookActions";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("5");

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        rating,
        id: nanoid(),
      })
    );
  };

  return (
    <form className="add-book">
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button onClick={addBookHandler}>Add book</button>
    </form>
  );
};

export default AddBook;
