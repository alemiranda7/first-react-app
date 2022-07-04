import React from "react";
import Header from "./ModuleOneComponents/Header";
import Home from "./ModuleOneComponents/Home";
import Produtos from "./ModuleOneComponents/Produtos";

const App = () => {
  let Pagina;
  const { pathname } = window.location;
  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <>
      <Header />
      <Pagina />
    </>
  );
};

export default App;
