import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Characters = () => {
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    return response.json();
  };

  const { isLoading, error, data, status } = useQuery(
    ["characters"],
    fetchCharacters
  );

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  console.log(data);

  return (
    <div>
      {data.results.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
};

export default Characters;
