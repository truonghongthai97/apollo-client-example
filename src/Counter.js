import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useReactiveVar } from "@apollo/client";

import { counterVar } from "./cache";

const GET_COUNTER = gql`
  query getCounter {
    counter @client
  }
`;

const Counter = () => {
  //   const { data } = useQuery(GET_COUNTER);
  const counter = useReactiveVar(counterVar);

  return (
    <div>
      <button onClick={() => counterVar(counter + 1)}>Increase</button>
      <button onClick={() => counterVar(counter - 1)}>Decrease</button>
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
