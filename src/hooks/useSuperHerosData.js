import axios from "axios";
import { useQuery, useMutation } from "react-query";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = () => {
  return axios.post("http://localhost:4000/superheroes");
};

export const useSuperHerosData = (onSuccess, onError) => {
  return useQuery("super-heros", fetchSuperHeros, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data?.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export const useAddSuperHero = () => {
  return useMutation(addSuperHero);
};
