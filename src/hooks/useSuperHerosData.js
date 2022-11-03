import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../util/axios-utils";

const fetchSuperHeros = () => {
  // return axios.get("http://localhost:4000/superheroes");
  return request({ url: "/superheroes" });
};

const addSuperHero = (hero) => {
  // return axios.post("http://localhost:4000/superheroes", hero);
  return request({ url: "/superheroes", method: "POST", data: hero });
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
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("super-heros");
      queryClient.setQueryData("super-heros", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
