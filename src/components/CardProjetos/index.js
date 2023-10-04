import React from "react";
import "./style.css";
import { BiLogoGithub, BiGlobe } from "react-icons/bi";
import jokenpo from "../../assets/img/JO-KEN-PÔ.png";
import photoEditor from "../../assets/img/photo-editor.png";
import rocketpay from "../../assets/img/rocketpay.png";
import multistap from "../../assets/img/mult-form.png";
import estimate from "../../assets/img/estimate.png";
import netflix from "../../assets/img/clone-netflix.png";

const CardProjetos = () => {
  return (
    <div className="container__cards">
      <div className="card">
        <div className="card__img_wrapper">
          <img src={jokenpo} alt="imagem do projeto ToDo" />
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
          <img src={photoEditor} alt="imagem do projeto ToDo" />
        </div>
        <div className="card__info">
          <h2>PHOTO EDITOR</h2>
          <h3>HTML, CSS, Javascript.</h3>
          <p>
            Este é um editor de fotos onde você pode editar suas fotos e fazer o
            download delas
          </p>
          <div className="container__btn">
            <a
              href="https://euller-trindade.github.io/PHOTO-EDITOR/"
              className="cust_btn botao"
              target="_blank"
              rel="noreferrer"
            >
              <BiGlobe /> Website
            </a>
            <a
              href="https://github.com/Euller-trindade/PHOTO-EDITOR"
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
          <img src={rocketpay} alt="imagem do projeto ToDo" />
        </div>
        <div className="card__info">
          <h2>Rocketpay</h2>
          <h3>HTML, CSS, JAVASCRIPT, JSON, NODE, IMASK.</h3>
          <p>
            O Rocketpay é um componente que simula o formulário de preenchimento
            de cartão de crédito.
          </p>
          <div className="container__btn">
            <a
              href="https://explorer-lab-git-main-euller-trindade.vercel.app/"
              className="cust_btn botao"
              target="_blank"
              rel="noreferrer"
            >
              <BiGlobe /> Website
            </a>
            <a
              href="https://github.com/Euller-trindade/explorer-lab"
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
          <img src={multistap} alt="imagem do projeto ToDo" />
        </div>
        <div className="card__info">
          <h2>MULTISTAP FORM</h2>
          <h3>REACT, TYPESCRIPT, STYLED-COMPONENTS.</h3>
          <p>
            Formulário multi-etapas que simula o cadastro de um desenvolvedor.
          </p>
          <div className="container__btn">
            <a
              href="https://multi-form-lemon.vercel.app/"
              className="cust_btn botao"
              target="_blank"
              rel="noreferrer"
            >
              <BiGlobe /> Website
            </a>
            <a
              href="https://github.com/Euller-trindade/Multi-Form"
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
          <h2>ESTIMATE</h2>
          <h3>REACT.</h3>
          <p>
            Projeto desenvolvido com React em que você pode gerenciar os custos
            dos seus projetos.
          </p>
          <div className="container__btn">
            <a
              href="https://github.com/Euller-trindade/Estimate"
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
          <img src={netflix} alt="imagem do projeto ToDo" />
        </div>
        <div className="card__info">
          <h2>NETFLIX CLONE</h2>
          <h3>REACT.</h3>
          <p>
            Clone da Netflix com tela de login e funcionalidade de assitir ao
            trailer do filme ou série escolhido.
          </p>
          <div className="container__btn">
            <a
              href="https://netflix-clone-git-main-euller-trindade.vercel.app/"
              className="cust_btn botao"
              target="_blank"
              rel="noreferrer"
            >
              <BiGlobe /> Website
            </a>
            <a
              href="https://github.com/Euller-trindade/netflix-clone"
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
