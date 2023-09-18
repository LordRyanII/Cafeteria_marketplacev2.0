import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import './Cardapio.css'

function ConteudoCardapio() {
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

  return (
    <div className="containerCardapio">
        <h2 style={{margin: 'auto', textAlign: 'center'}}>Cardápio</h2>
      <div className="row">
        {produtos.map((produto) => (
          <div key={produto._id} className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={produto.image}
              />
              <Card.Body>
                <Card.Title>{produto.produto}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <Card.Text>Quantidade: {produto.quantidade}</Card.Text>
                <Card.Text>
                  Preço: R${produto.preco_compra.toFixed(2)}
                </Card.Text>
                <Button style={{margin: 'auto', textAlign: 'center', backgroundColor: 'green', color: 'white'}}> Conferir</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConteudoCardapio;
