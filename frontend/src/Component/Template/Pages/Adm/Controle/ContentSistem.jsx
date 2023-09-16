import React from "react";
import "./ContentPage.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";


function ContentSistem(props) {
  const { titulo, descricao, conteudo } = props.conteudo; // Acesse a prop 'conteudo' aqui
  return (
    <div className="conteudoPagina">
      <h1 className="tituloPagina">{titulo}</h1>
      <p className="descricaoPagina"> {descricao}</p>
      {conteudo}
    </div>
  );
}


export default ContentSistem;
