import React from "react";
import { atom, useAtom } from "jotai";

const counter = atom(0);

const DataContext = () => {
  const [count, setCount] = useAtom(counter);

  return {
    counter: {
      count,
      setCount,
    },
  };
};

export default DataContext;
