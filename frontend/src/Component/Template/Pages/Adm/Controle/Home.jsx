import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import "../../../../assets/css/Adm.css";
// import CadastroProdutos from "./CadastroProdutos";
// import ConferirEstoque from "./ConferirEstoque";
// import CadastroUsuario from "./CadastroUsuario";

function Layout() {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="menu">
        <h2>Gerenciamento</h2>
        <hr />
        <ul>
          <li>
            <Link to="/Adm/CadastroProdutos">Cadastro de Produtos</Link>
          </li>
          <li>
            <Link to="/Adm/EstoqueProdutos">Conferir Estoque</Link>
          </li>
          <li>
            <Link to="/CadastroUser">Cadastro de Usuário</Link>
          </li>
        </ul>
      </div>

      <div className="Saudacao-controle">
            <div className="boasvindas">
                <h1>
                    Boa noite Ryan, seja bem-vindo
                </h1>
            </div>
            
      </div>
    </div>
  );
}

export default Layout;
