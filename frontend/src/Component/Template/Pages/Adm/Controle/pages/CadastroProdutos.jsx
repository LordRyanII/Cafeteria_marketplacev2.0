import React from "react";
import Nav from "../NavControle";
import ContentSistem from "../ContentSistem";
import "./Pages.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

// {
//   "produto": "Renatinha",
//   "descricao": "Uma delícia bem molhadinha",
//   "preco_compra": 0.00,
//   "quantidade": "1",
//   "image": "https://images.tcdn.com.br/img/img_prod/854009/croissant_10_unidades_dugab_1423_1_0b903729b4bf8fcfcc9337c4b1d938a7.jpg"

// }

const requireProdutos = () => {
  const urlBase = "http://localhost:3002/produtos/create/produto/";
  axios.post(urlBase, {});
};

function GridComplexExample() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Produto:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Preço unitário:</Form.Label>
          <Form.Control type="number" placeholder="R$" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Descrição:</Form.Label>
        <br />
        <textarea style={{ width: "80%", height: "65px" }} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Quantidade:</Form.Label>
          <Form.Control type="quantidade" placeholder="Peso do produto" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function CadastroProdutos() {
  const conteudo = {
    titulo: "Cadastro de produtos", // Defina o título que deseja passar como prop
    descricao: "Cadastre produtos que serão usados na cafeteria",
    conteudo: (
      <>
        <GridComplexExample />
      </>
    ),
  };

  return (
    <div className="contentNotificacao">
      <Nav />
      <ContentSistem conteudo={conteudo} /> {/* Passe a prop 'conteudo' aqui */}
    </div>
  );
}

export default CadastroProdutos;
