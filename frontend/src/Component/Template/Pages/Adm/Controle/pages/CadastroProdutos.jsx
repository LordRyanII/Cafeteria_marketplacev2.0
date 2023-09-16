import React, { useState } from "react";
import Nav from "../NavControle";
import ContentSistem from "../ContentSistem";
import "./Pages.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { Navigate, useNavigate } from "react-router-dom";

function CadastroProdutos() {
  const [produto, setProduto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [precoCompra, setPrecoCompra] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [image, setImage] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const urlBase = "http://localhost:3002/produtos/create/produto/";
    try {
      const response = await axios.post(urlBase, {
        produto,
        descricao,
        preco_compra: precoCompra,
        quantidade,
        image,
      });
      if (response.status === 200 || response.Status === "Ok") {
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000);
        navigate("/Adm/controle/EstoqueProdutos");
        setProduto("");
        setDescricao("");
        setPrecoCompra(0);
        setQuantidade(0);
        setImage("");
      } else {
        alert("Erro");
      }
    } catch (error) {
      console.error("Erro ao cadastrar o produto", error);
    }
  };

  return (
    <div className="contentNotificacao">
      <Nav />
      <ContentSistem
        conteudo={{
          titulo: "Cadastro de produtos",
          descricao: "Cadastre produtos que serão usados na cafeteria",
          conteudo: (
            <Form onSubmit={handleFormSubmit}>
              {showSuccessAlert && (
                <Alert variant="success">
                  Produto cadastrado com sucesso!
                </Alert>
              )}
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Produto:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome do produto"
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Preço unitário:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="R$"
                    value={precoCompra}
                    onChange={(e) => setPrecoCompra(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Descrição:</Form.Label>
                <br />
                <textarea
                  style={{ width: "80%", height: "65px" }}
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Quantidade:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Peso do produto"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Link da imagem:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Adicione o link do produto"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <div
                className="buttonSubmit"
                style={{ margin: "auto", textAlign: "center", width: "100%" }}
              >
                <Button variant="primary" type="submit">
                  Cadastrar
                </Button>
              </div>
            </Form>
          ),
        }}
      />
    </div>
  );
}

export default CadastroProdutos;
