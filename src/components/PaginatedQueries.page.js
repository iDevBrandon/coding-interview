import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColor = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, isError, error } = useQuery(
    ["colors", pageNumber],
    () => fetchColor(pageNumber)
  );

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.data.map((color) => {
        return (
          <div key={color.id}>
            <h2>{color.label}</h2>
          </div>
        );
      })}

      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedQueriesPage;
