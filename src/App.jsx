import React from "react";
import useCounter from "./assets/Button";

function App() {
  const [priverder, plus, minus] = useCounter();

  const [priverder1, plus1, minus1] = useCounter();

  return (
    <div>
      <button onClick={plus}>+</button>
      <h2>{priverder}</h2>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
