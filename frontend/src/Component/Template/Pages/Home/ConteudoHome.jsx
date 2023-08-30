import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center">
      <div className="row">
        {/* Card Café expresso */}
        <div
          className="card"
          style={{
            width: "18rem",
            margin: "10px 5px",
            backgroundColor: "#ffffffa2",
          }}
        >
          <img
            src="https://cafeinacao.com.br/wp-content/uploads/2022/03/cropped-café-espresso-scaled-1-640x853.jpeg"
            className="card-img-top"
            alt="Café expresso 250ml"
            title="Café expresso clássico"
          />
          <div className="card-body">
            <h5 className="card-title">Café expresso 250ml</h5>
            <p className="card-text">
              <i>Café autêntico, clássico e maravilhoso</i>
            </p>
            <Link to="/produtos/cafeexpresso" className="btn btn-danger">
              Saiba mais
            </Link>
          </div>
        </div>

        {/* Card Café passado na hora */}

        <div
          className="card"
          style={{
            width: "18rem",
            margin: "10px 5px",
            backgroundColor: "#ffffffa2",
          }}
        >
          <img
            src="https://veja.abril.com.br/wp-content/uploads/2018/06/comer-e-beber-poa-comidinhas-cafc3a9-repc3bablica-cup-0003.jpg?quality=70&strip=info&w=667&h=720&crop=1"
            className="card-img-top"
            alt="Café mocchacinno"
            title="Café maravilhoso!!"
          />
          <div className="card-body">
            <h5 className="card-title">Café Sempre na hora!</h5>
            <p className="card-text">
              <i>
                Café novinho, sempre passado na hora para momentos especiais que
                pedem sempre um café passado na hora!
              </i>
            </p>
            <Link to="/contato/sobre" className="btn btn-danger">
              Saiba mais
            </Link>
          </div>
        </div>

        {/* Card Café viagem */}

        <div
          className="card"
          style={{
            width: "18rem",
            margin: "10px 5px",
            backgroundColor: "#ffffffa2",
          }}
        >
          <img
            src="https://hashtagcuritiba.com/wp-content/uploads/2018/01/Orna_Levar-3.jpeg"
            className="card-img-top"
            alt="Opções para levar"
            title="Opções para levar"
          />
          <div className="card-body">
            <h5 className="card-title">Opções para levar</h5>
            <p className="card-text">
              <i>
                Opções sempre para a viagem. Sabemos que a vida pode ser muito
                agitada, por isso leve nossos cafés para onde for.
              </i>
            </p>
            <Link to="/produtos/cafeexpresso" className="btn btn-danger">
              Saiba mais
            </Link>
          </div>
        </div>

        {/* Card Café para reuniões */}

        <div
          className="card"
          style={{
            width: "18rem",
            margin: "10px 5px",
            backgroundColor: "#ffffffa2",
          }}
        >
          <img
            src="https://imag.bonviveur.com/diferentes-tipos-de-cafes.jpg"
            className="card-img-top"
            alt="Marque reuniões"
            title="Marque reuniões"
          />
          <div className="card-body">
            <h5 className="card-title">Marque reuniões</h5>
            <p className="card-text">
              <i>
                As melhores companhias, reuniões e assuntos importantes sempre
                pedem café. Veja nossa agenda e tenha um lugar agradável para os
                diversos assuntos.
              </i>
            </p>
            <Link to="/contato/comercial" className="btn btn-danger">
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
