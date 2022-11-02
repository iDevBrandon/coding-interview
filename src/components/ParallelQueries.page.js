import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueriesPage = () => {
  const { data: superHeros } = useQuery("super-heros", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return <div></div>;
};

export default ParallelQueriesPage;
