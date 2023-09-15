import React from "react";
import '../../../assets/css/About.css'

function Conteudo() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" id="carroselSlide">
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "rgb(97, 26, 26)" }}>
              <strong>Seu café passa por nossas mãos</strong>
            </h5>
            <p>
              Cuidadosamente preparado para despertar os sentidos e envolver seu
              paladar em uma experiência única.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/4920855/pexels-photo-4920855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "rgb(97, 26, 26)" }}>
              <strong>O máximo de excelência com nossos clientes</strong>
            </h5>
            <p>
              Aqui você encontra uma equipe dedicada em atender e zelar para uma
              melhor experiência.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}


export default Conteudo