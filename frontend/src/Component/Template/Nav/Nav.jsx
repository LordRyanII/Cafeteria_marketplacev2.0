import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tipos de Café
              </a>
              <ul className="dropdown-menu dropdown-menu-center" aria-labelledby="navbarDropdown1">
                <li>
                  <a className="dropdown-item" href="#">
                    <Link to="/produtos/cardapio">Cardápio</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Para a viagem
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sobre
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu de itens
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown2">
                <li>
                  <a className="dropdown-item" href="#">
                    Opções de lanches
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ofertas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Saiba mais
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-map"></i>Locais
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown3">
                <li>
                  <a className="dropdown-item" href="#">
                    Pontos de acesso
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Estacionamento
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Horário de Atendimento
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
