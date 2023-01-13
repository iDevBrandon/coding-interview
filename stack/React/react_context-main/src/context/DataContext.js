// import { createContext, useState, useEffect } from "react";
// import useAxiosFetch from "../hooks/useAxiosFetch";

// const DataContext = createContext({});

// export const DataProvider = ({ children }) => {
//   const [posts, setPosts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const { data, fetchError, isLoading } = useAxiosFetch(
//     "http://localhost:3500/posts"
//   );

//   useEffect(() => {
//     setPosts(data);
//   }, [data]);

//   useEffect(() => {

//   }, [posts, search]);

//   return (
//     <DataContext.Provider
//       value={{
//         search,
//         setSearch,
//         searchResults,
//         fetchError,
//         isLoading,
//         posts,
//         setPosts,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default DataContext;

import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import api from "../api/posts";
import useAxiosFetch from "../hooks/useAxiosFetch";
import useWindowSize from "../hooks/useWindowSize";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { width } = useWindowSize();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{ width, search, setSearch, searchResults, posts, setPosts }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
