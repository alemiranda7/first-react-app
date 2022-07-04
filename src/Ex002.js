import React from "react";

const titulo = <h1>Titulo com variavel</h1>;
const random = Math.random();

function useRandom() {
  return Math.random();
}

const Ex002 = () => {
  const estiloP = {
    color: "#333",
  };

  return (
    <>
      <p style={estiloP}>{titulo}</p>

      <p className="random1" title="numero multiplicado por 100">
        {random * 100}
      </p>

      <p className="random2" title="numero gerado aleatorio com titulo">
        {random}
      </p>

      <p title="numero aleatorio com função">{useRandom()}</p>

      <p className="corpoText">
        <a href="/"> aqui é o corpo do texto</a>
      </p>
    </>
  );
};

export default Ex002;
