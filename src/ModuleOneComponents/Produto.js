import React from "react";

const Produto = ({ nome, propriedade }) => {
  return (
    <>
      <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
        <p>{nome}</p>
        <ul>
          {propriedade.map((propriedade) => (
            <li>{propriedade}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Produto;
