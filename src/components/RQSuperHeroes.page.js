import React, { useState } from "react";
import { useAddSuperHero, useSuperHerosData } from "../hooks/useSuperHerosData";

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("Perform side effect after fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect encountering error", error);
  };

  const { isLoading, data, isError, error, refetch } = useSuperHerosData(
    onSuccess,
    onError
  );

  const { mutate: addHero } = useAddSuperHero();

  const AddHeroHandler = () => {
    console.log("====================================");
    console.log({ name, alterEgo });
    console.log("====================================");
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isError) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Super Hero page</h1>
      <div>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="alterEgo"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={AddHeroHandler}>Add hero</button>
      </div>
      <div>
        <button onClick={refetch}>Fetch Heros</button>
        <div>
          {data?.data.map((hero) => (
            <div key={hero.id}>{hero.name}</div>
          ))}
        </div>
        {console.log(data)}
      </div>
    </div>
  );
};
