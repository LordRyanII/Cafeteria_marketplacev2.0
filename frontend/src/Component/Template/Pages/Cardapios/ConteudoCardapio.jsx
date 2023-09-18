import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Cardapio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function ConteudoCardapio() {
  const [produtos, setProdutos] = useState([]);
  const [primeiroProduto, setPrimeiroProduto] = useState(null);

  useEffect(() => {
    const urlBase = "http://localhost:3002/produtos/res/produtos/";
    axios
      .get(urlBase)
      .then((response) => {
        const produtosData = response.data.produtos;
        setProdutos(produtosData);
        // Defina o primeiro produto como o primeiro da lista.
        if (produtosData.length > 0) {
          setPrimeiroProduto(produtosData[0]);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <div className="containerCardapio">
      <h2 style={{ margin: "auto", textAlign: "center" }} className="displayTitulo">Cardápio <FontAwesomeIcon icon={faCoffee} /></h2><br />
      {primeiroProduto && (
        <Card className="primeiroProduto">
          <Card.Img variant="top" src={primeiroProduto.image} />
          <Card.Body>
            <Card.Text style={{textAlign: 'center'}}>
              {primeiroProduto.descricao + ' confira abaixo :)'}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
      <br />

      <div className="row">
        {produtos.map((produto, index) => (
          <div key={produto._id} className="col-md-4">
            <Card style={{ width: "18rem" }} className={index === 0 ? "primeiroProduto" : ""}>
              <Card.Img variant="top" src={produto.image} />
              <Card.Body>
                <Card.Title>{produto.produto}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <Card.Text>Quantidade: {produto.quantidade}</Card.Text>
                <Card.Text>
                  Preço: R${produto.preco_compra.toFixed(2)}
                </Card.Text>
                <Button
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  Conferir
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConteudoCardapio;
