import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("super-heros", () => {
    return axios.get("http://localhost:4000/superheroes");
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data?.data.map((hero) => {
        return <div>{hero.name}</div>;
      })}
    </div>
  );
};
