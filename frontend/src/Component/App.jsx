import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importe Routes

import Home from "../Component/Template/Pages/Home/Telainicial";
import Produtos from "../Component/Template/Pages/Produtos/Home/HomeProdutos";
import About from "../Component/Template/Pages/About/About";
import Login from "../Component/Template/Pages/Adm/Login/Login";
import AdmControle from "../Component/Template/Pages/Adm/Controle/Home";
import Notificacoes from "./Template/Pages/Adm/Controle/pages/Notificacao";
import CadastroProdutos from "./Template/Pages/Adm/Controle/pages/CadastroProdutos";
import ListaProdutos from "./Template/Pages/Adm/Controle/pages/ListaProdutos";
import Cardapio from "./Template/Pages/Cardapios/Cardapio";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas para usuários */}
        <Route path="/" element={<Home />} />
        <Route path="/produtos/cafeexpresso" element={<Produtos />} />
        <Route path="/contato/sobre" element={<About />} />
        <Route path="/produtos/cardapio" element={<Cardapio />} />

        {/* Rotas para Adm */}
        <Route path="/Adm/login" element={<Login />} />
        <Route path="/Adm/controle" element={<AdmControle />} />
        <Route path="/Adm/controle/Notificacao/" element={<Notificacoes />} />
        <Route
          path="/Adm/controle/CadastroProdutos/"
          element={<CadastroProdutos />}
        />
        <Route
          path="/Adm/controle/EstoqueProdutos/"
          element={<ListaProdutos />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
