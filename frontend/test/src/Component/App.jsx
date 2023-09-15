import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Component/Template/Pages/Home/Telainicial";
import Produtos from "../Component/Template/Pages/Produtos/Home/HomeProdutos";
import About from '../Component/Template/Pages/About/About';
import Login from '../Component/Template/Pages/Adm/Login/Login';
import AdmControle from '../Component/Template/Pages/Adm/Controle/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos/cafeexpresso" element={<Produtos />} />
        <Route path="/contato/sobre" element={<About />} />
        <Route path="/Adm/login" element={<Login />} />
        <Route path="/Adm/controle" element={<AdmControle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
