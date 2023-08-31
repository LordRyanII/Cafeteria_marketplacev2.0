import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Component/Template/Pages/Home/Telainicial";
import Produtos from "../Component/Template/Pages/Produtos/Home/HomeProdutos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos/cafeexpresso" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
