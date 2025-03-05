import React from "react";
import { useState } from "react";

function useCounter() {
  const [state, setState] = useState(0);
  const increament = () => {
    setState(state + 1);
  };

  const decrement = () => {
    if (state === 0) {
      return state - 1;
    }
    setState(state - 1);
  };
  return [state, increament, decrement];
}

export default useCounter;
