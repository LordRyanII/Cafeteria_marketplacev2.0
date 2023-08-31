import React from "react";

function HomeProdutos() {
  return (
    <main style={{ marginTop: "45px" }}>
      {/* Café expresso */}
      <div className="card mb-3" style={{ maxWidth: "80%", margin: "auto" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://cafeinacao.com.br/wp-content/uploads/2022/03/cropped-café-espresso-scaled-1-640x853.jpeg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Café expresso 250ml</h5>
              <p
                className="card-text"
                style={{
                  textAlign: "justify",
                  textIndent: "10px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                Autêntico café expresso, daqueles para começar a manhã!
                <br />
                Apresentamos a você uma experiência única em forma líquida, um café expresso 250ml
                que irá satisfazer todos os seus sentidos. Este é o verdadeiro café expresso,
                cuidadosamente preparado para proporcionar um sabor intenso e um aroma cativante.
                <br />
                Ao segurar a xícara de 250ml, você sentirá o calor reconfortante emanando do líquido
                escuro e rico que a preenche. Ao levar a xícara aos lábios, o aroma intenso de grãos
                torrados preencherá o ar, preparando você para a iminente explosão de sabor.
                <br />
              </p>
              <img
                src="https://img.freepik.com/premium-vector/coffee-cup_592324-16203.jpg"
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "transparent",
                }}
              />
              <img
                src="https://img.freepik.com/vetores-premium/uma-xicara-de-cafe-vetor_527939-124.jpg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "transparent",
                }}
              />
              <br />
              <br />
              <button type="button" className="btn btn-success">
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Fazer pedido?
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeProdutos;
