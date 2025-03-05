// import React from "react";
// import useCounter from "./assets/Button";

// function App() {
//   const [priverder, plus, minus] = useCounter();

//   const [priverder1, plus1, minus1] = useCounter();

//   return (
//     <div>
//       <button onClick={plus}>+</button>
//       <h2>{priverder}</h2>
//       <button onClick={minus}>-</button>
//       <button onClick={plus1}>+</button>
//       <h2>{priverder1}</h2>
//       <button onClick={minus1}>-</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Кош келди, колдонуучу!</h1>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Кирүү</button>
      )}
    </div>
  );
}

export default App;
