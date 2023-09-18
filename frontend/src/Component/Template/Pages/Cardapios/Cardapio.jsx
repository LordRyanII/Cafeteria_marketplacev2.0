import React from "react";
import Nav from "../../Nav/Nav";
import header from "../../Header/Header";
import ConteudoCardapio from "./ConteudoCardapio";

function Cardapio() {
  return (
    <div className="cardapio">
      <header />
      <Nav />
      <ConteudoCardapio />
    </div>
  );
}

export default Cardapio
