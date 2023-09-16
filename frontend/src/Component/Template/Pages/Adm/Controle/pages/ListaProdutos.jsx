import React, { useState, useEffect } from "react";
import Nav from "../NavControle";
import ContentSistem from "../ContentSistem";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const urlBase = "http://localhost:3002/produtos/res/produtos/";
    axios
      .get(urlBase)
      .then((response) => {
        const produtosData = response.data.produtos;
        setProdutos(produtosData);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  const conteudo = {
    titulo: "Lista de Produtos",
    descricao: "Produtos disponíveis na loja",
    conteudo: (
      <div className="container">
        <div className="row">
          {produtos.map((produto) => (
            <div key={produto._id} className="col-md-4">
              <Card style={{ width: "18rem" }}>
                <Link to="/Adm/controle/CadastroProdutos/">
                  <Card.Img variant="top" src={produto.image} title="Para Editar o produto Clique aqui"/>
                </Link>
                <Card.Body>
                  <Card.Title>{produto.produto}</Card.Title>
                  <Card.Text>{produto.descricao}</Card.Text>
                  <Card.Text>Quantidade: {produto.quantidade}</Card.Text>
                  <Card.Text>
                    Preço: R${produto.preco_compra.toFixed(2)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="contentProdutos">
      <Nav />
      <ContentSistem conteudo={conteudo} />
    </div>
  );
}

export default ListaProdutos;
