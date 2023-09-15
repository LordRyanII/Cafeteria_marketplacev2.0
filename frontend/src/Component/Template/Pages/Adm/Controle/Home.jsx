import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import "./Adm.css";
import OffcanvasExample from './NavControle'
// import CadastroProdutos from "./CadastroProdutos";
// import ConferirEstoque from "./ConferirEstoque";
// import CadastroUsuario from "./CadastroUsuario";

function Layout() {
  // const location = useLocation();

  return (
    <div className="app-container">
      <div className="menu-adm">
      <OffcanvasExample />
      </div>
      <div className="Saudacao-controle">
        <div className="boasvindas">
          <h1>Sistema de gerenciamento Le Renata Cafeteria</h1>
        </div>
      </div>
    </div>
  );
}

export default Layout;
