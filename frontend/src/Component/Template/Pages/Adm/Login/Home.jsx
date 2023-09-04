import React from "react";
import "../../../../assets/css/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Importe useNavigate, anotar sobre
import Input from "../../../Login/inputs";


function App() {
  const navigate = useNavigate(); //Faz o redirect

  function api() {
    const uriBase = "http://localhost:3002/adm/login";
    const inputEmail = document.querySelector("#floatingInput");
    const inputSenha = document.querySelector("#floatingPassword");
    const email = inputEmail.value;
    const senha = inputSenha.value;

    axios
      .post(uriBase, {
        email: email,
        senha: senha,
      })
      .then((resp) => validaDados(resp))
      .catch((error) => console.log(error));
  }

  function validaDados(resp) {
    if (resp.data.status === "Ok" || resp.data.status === "OK") {
      alert("OK");
      navigate('/Adm/controle'); 
    } else {
      alert("Erro");
      console.log(resp);
    }
  }

  return (
    <div className="container">
      <div className="content">
        <div className="saudacao">
          <h1>Bem-vindo Gestor, café não se faz sozinho!</h1>
          <p>Entre com o seu login e senha</p>
        </div>
        <hr></hr>
        <Input />
          <button type="button" className="btn" id="btn-envio" onClick={api}>
            Entrar
          </button>
        </div>
      </div>
  );
}

export default App;
