import React from "react";
import "./cardProjetos.css";
import { BiLogoGithub, BiGlobe } from "react-icons/bi";
import estimate from "../../assets/img/estimate.png";
const CardProjetos = () => {
  return (
    <div className="container__cards">
      <div className="card">
        <div className="card__img_wrapper">
          <img src={estimate} alt="imagem do projeto ToDo" />
        </div>
        <div className="card__info">
          <h2>JO KEN PÔ</h2>
          <h3>HTML, CSS, Javascript.</h3>
          <p>
            Jogo de Jo ken pô desenvolvido ultilizando html, css e Javascript.
            Nele você pode jogar contra a própria máquina.
          </p>
          <div className="container__btn">
            <a
              href="https://euller-trindade.github.io/JO-KEN-P-/"
              className="cust_btn botao"
              target="_blank"
              rel="noreferrer"
            >
              <BiGlobe /> Website
            </a>
            <a
              href="https://github.com/Euller-trindade/JO-KEN-P-"
              className="cust_btn botao"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__img_wrapper">
          <img src={estimate} alt="imagem do projeto ToDo" />
        </div>
        <div className="card__info">
          <h2>JO KEN PÔ</h2>
          <h3>HTML, CSS, Javascript.</h3>
          <p>
            Jogo de Jo ken pô desenvolvido ultilizando html, css e Javascript.
            Nele você pode jogar contra a própria máquina.
          </p>
          <div className="container__btn">
            <a
              href="https://euller-trindade.github.io/JO-KEN-P-/"
              className="cust_btn botao"
              target="_blank"
              rel="noreferrer"
            >
              <BiGlobe /> Website
            </a>
            <a
              href="https://github.com/Euller-trindade/JO-KEN-P-"
              className="cust_btn botao"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProjetos;
