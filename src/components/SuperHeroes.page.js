import { useState, useEffect } from "react";
import axios from "axios";

export const SuperHeroesPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Super heros</h2>
      {data.map((hero) => {
        return <>{hero.name}</>;
      })}
    </div>
  );
};
