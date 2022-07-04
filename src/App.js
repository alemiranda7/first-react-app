import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Voce clicou {count} vezes.</p>
        <p>
          <button
            style={{ fontWeight: "bold" }}
            onMouseMove={() => setCount(count + 1)}
          >
            +
          </button>
        </p>
        <p>
          <button
            style={{ fontWeight: "bold" }}
            onMouseMove={() => setCount(count - 1)}
          >
            -
          </button>
        </p>
      </div>
    </>
  );
};

export default App;
