import React from "react";
import { useQuery } from "@tanstack/react-query";

import { apiRequest } from "../services/api";

const Home = () => {
  const { isLoading, isError, data, error } = useQuery(["todos"], apiRequest);

  if (isLoading) return <h2>...Loading</h2>;
  if (isError) return <h2>{error}</h2>;
  return (
    <>
      <ul>
        {data.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
};

export default Home;
