import NavBar from "./components/NavBar/NavBar";
import "./app.css";
import { AiOutlineDownload, AiOutlineGithub } from "react-icons/ai";
import { BiCodeAlt, BiSolidMoon } from "react-icons/bi";
import { FaSun } from "react-icons/fa";
import minhaFoto from "./assets/img/euller.png";
import whatsapp from "./assets/img/whatsapp.png";
import linkedin from "./assets/img/linkedin.png";
import githubBranco from "./assets/img/github-branco.png";
import githubPreto from "./assets/img/github-preto.png";
import curriculo from "./assets/curriculo/euller_trindade.pdf";
import { useEffect, useState } from "react";
import CardHabilidades from "./components/CardHabilidades/CardHabilidades";
import CardProjetos from "./components/CardProjetos/CardProjetos";
import Contato from "./components/Contato/Contato";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  const options = [
    {
      icon: <FaSun />,
      text: "light",
    },
    {
      icon: <BiSolidMoon />,
      text: "dark",
    },
  ];
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");

        break;
    }
  }, [theme]);

  return (
    <div className={` ${theme === "dark" ? "dark" : " light"}`}>
      <NavBar theme={theme} setTheme={setTheme} options={options} />
      <div id="home" className="apresentacao">
        <section className="apresentacao__info">
          <h2 className="apresentacao__info_h2 typing__animation">
            Desenvolvedor <span className="span__fontend">Front-End</span>
            <BiCodeAlt />
          </h2>
          <h1>Euller Trindade</h1>
          <div className="mais__info">
            <a href={curriculo} className="mais__info_curriculo" download>
              Baixar CV <AiOutlineDownload />{" "}
            </a>
            <a
              href="https://github.com/Euller-trindade"
              className="mais__info_github"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <AiOutlineGithub />
            </a>
          </div>
        </section>
        <section className="minha__foto">
          <img src={minhaFoto} alt="foto de Euller Trindade" />
        </section>
      </div>
      <div id="sobre" className="sobre ">
        <section className="sections__header">
          <h2>
            Quem sou <span>eu</span>?
          </h2>
          <h4>Conheça um pouquinho sobre mim!</h4>
        </section>
        <section className="sobre__text">
          <p>
            Olá, me chamo Euller! Atualmente tenho 23 anos, sou uma pessoa
            apaixonada por tecnologia, animes e jogos, amo conhecer novas
            pessoas e fazer amizades. em <span>novembro de 2021</span> iniciei
            meus estudos em
            <span> desenvolvimento front-end</span> e estou em busca de uma
            oportunidade para colaborar com minhas hards e softwares skills.
          </p>
        </section>
      </div>
      <div id="habilidades" className="habilidades">
        <section className="sections__header">
          <h2>Habilidades</h2>
          <h4>Conheça algumas das minhas habilidades!</h4>
        </section>
        <section>
          <CardHabilidades />
        </section>
      </div>
      <div id="projetos" className="projetos">
        <section className="sections__header">
          <h2>Projetos</h2>
          <h4>Aqui estão alguns dos meus projetos.</h4>
        </section>
        <section>
          <CardProjetos />
        </section>
      </div>
      <div id="contato" className="contato">
        <section className="sections__header">
          <h2>Contato</h2>
          <h4>Ficou interessado(a) ? Entre em contato comigo!</h4>
          <div className="redes">
            <a
              href="https://api.whatsapp.com/send?phone=5579998438276"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="whatsapp" className="image__logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/euller-trindade/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="image__logo" />
            </a>
            <a
              href="https://github.com/Euller-trindade"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={theme === "light" ? githubPreto : githubBranco}
                alt="github"
                className="image__logo"
              />
            </a>
          </div>
        </section>
        <section>
          <Contato />
        </section>
        <footer>
          {" "}
          <p>&copy; Criado e desenvolvido por Euller Trindade</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
