import React from "react";

const Library = () => {
  const deleteBookHandler = (id) => {
    // dispatch a delete book action
  };
  return (
    <div className="library">
      <h2>Library</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Rating</th>
          <th></th>
        </tr>
        <tr>
          <td>Dune</td>
          <td>F. Herbert</td>
          <td>10</td>
          <td>
            <button className="delete" onClick={deleteBookHandler}>
              x
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Library;
