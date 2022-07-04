import React from "react";
import Produto from "./Produto";
import Titulo from "./Titulo";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedade: ["HD 512gb", "8gb ram"] },
    { nome: "Smartphone", propriedade: ["HD 80gb", "4gb ram"] },
  ];

  return (
    <>
      <section>
        <Titulo titulo="Produtos" />
        {produtos.map((produto) => (
          <Produto key={produto.nome} {...produto} />
        ))}
      </section>
    </>
  );
};

export default Produtos;
