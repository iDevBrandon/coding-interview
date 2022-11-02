import React from "react";
import { Link } from "react-router-dom";
import { useSuperHerosData } from "../hooks/useSuperHerosData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHerosData(
    onSuccess,
    onError
  );

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
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </div>
  );
};
