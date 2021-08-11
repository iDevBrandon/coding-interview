import React from "react";

const AddBook = () => {
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={(e) => e.target.value} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" value={author} onChange={(e) => e.target.value} />
      </div>
    </form>
  );
};

export default AddBook;
