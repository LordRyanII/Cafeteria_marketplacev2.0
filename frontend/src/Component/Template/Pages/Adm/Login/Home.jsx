import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Input from "../../../Login/inputs"; // Importe o componente Input apropriadamente

function Home() {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailValido, setEmailValido] = useState(true);
  const [senhaValida, setSenhaValida] = useState(true);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailValido(true); // Removemos a validação de campo vazio aqui
  };

  const handleSenhaChange = (e) => {
    const senhaValue = e.target.value;
    setSenha(senhaValue);
    setSenhaValida(true); // Removemos a validação de campo vazio aqui
  };

  function api() {
    const uriBase = "http://localhost:3002/adm/login";

    if (!emailValido || !senhaValida) {
      // Verifica campos vazios
      showError();
      return;
    }

    axios
      .post(uriBase, {
        email: email,
        senha: senha,
      })
      .then((resp) => validaDados(resp))
      .catch((error) => console.log(error));
  }

  function validaDados(resp) {
    if (resp.status === 200 && resp.data.status === "Ok") {
      // Senha correta, mostrar modal de sucesso
      showSuccess();
      navigate("/Adm/controle");
    } else {
      // Senha incorreta, mostrar modal de erro
      showError();
      console.log(resp);
    }
  }

  function showSuccess() {
    setShowSuccessModal(true);
  }

  function showError() {
    setShowErrorModal(true);
  }

  return (
    <div className="conteudo-login">
      <div className="saudacao">
        <h1>Bem-vindo Gestor, café não se faz sozinho!</h1>
        <p>Entre com o seu login e senha</p>
      </div>
      <hr></hr>
      // ...
      <Input
        type="email"
        id="floatingInput"
        placeholder="Endereço de email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        id="floatingPassword"
        placeholder="Senha"
        value={senha}
        onChange={handleSenhaChange}
      />

      <button type="button" className="btn" id="btn-envio" onClick={api}>
        Entrar
      </button>
      
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Login bem-sucedido. Redirecionando para a página de controle...
        </Modal.Body>
      </Modal>
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Erro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ocorreu um erro. Verifique suas credenciais ou preencha todos os
          campos corretamente.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
