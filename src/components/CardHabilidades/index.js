import React from "react";
import "./style.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoSass,
  BiLogoBootstrap,
  BiLogoGithub,
  BiLogoGit,
} from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
const CardHabilidades = () => {
  return (
    <div className="container__tecnologias">
      <div className="card__tecnologia">
        <AiFillHtml5 />
        <p>HTML</p>
      </div>
      <div className="card__tecnologia">
        <BiLogoCss3 />
        <p>CSS</p>
      </div>
      <div className="card__tecnologia">
        <BiLogoJavascript />
        <p>JAVASCRIPT</p>
      </div>
      <div className="card__tecnologia">
        <BiLogoReact />
        <p>REACT</p>
      </div>
      <div className="card__tecnologia">
        <SiStyledcomponents />
        <p>STYLED-COMPONENTS</p>
      </div>
      <div className="card__tecnologia">
        <BiLogoTailwindCss />
        <p>TAILWINDCSS</p>
      </div>
      <div className="card__tecnologia">
        <BiLogoSass />
        <p>SASS</p>
      </div>
      <div className="card__tecnologia">
        <BiLogoBootstrap />
        <p>BOOTSTRAP</p>
      </div>
      <div className="card__tecnologia">
        <BiLogoGithub />
        <p>GITHUB</p>
      </div>
      <div className="card__tecnologia">
        <BiLogoGit />
        <p>GIT</p>
      </div>
    </div>
  );
};

export default CardHabilidades;
