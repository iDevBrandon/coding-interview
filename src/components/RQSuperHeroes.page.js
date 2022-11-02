import React from "react";
import { useSuperHerosData } from "../hooks/useSuperHerosData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHerosData(onSuccess, onError);

  console.log("====================================");
  console.log({ isLoading, isFetching });
  console.log("====================================");

  if (isError) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </div>
  );
};
