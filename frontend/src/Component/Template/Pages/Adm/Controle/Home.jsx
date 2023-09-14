import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import "./Adm.css";
// import CadastroProdutos from "./CadastroProdutos";
// import ConferirEstoque from "./ConferirEstoque";
// import CadastroUsuario from "./CadastroUsuario";

function Layout() {
  // const location = useLocation();

  return (
    <div className="app-container">
      <div className="menu-adm">
        <h2></h2>
        <hr />
        <ul className="nav-produtos">
          <li>
            <Link to="/Adm/CadastroProdutos">Cadastro de Produtos</Link>
          </li>
          <hr />
          <li>
            <Link to="/Adm/EstoqueProdutos">Conferir Estoque</Link>
          </li>
          <hr />
          <li>
            <Link to="/CadastroUser">Notificações</Link>
          </li>
          <hr />
          <li>
            <Link to="/CadastroUser">Envio de produtos</Link>
          </li>
          <hr />
          <li>
            <Link to="/CadastroUser">Conta</Link>
          </li>
        </ul>
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
