import React, { useState } from "react";
import "./style.css";
import DarkMode from "../DarkMode";
import { BiCodeAlt } from "react-icons/bi";

function Navbar({ theme, setTheme, options }) {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className={`${theme === "dark" ? "nav dark" : "nav light"}`}>
      <BiCodeAlt className="nav__icon" />
      <ul className={active}>
        <li className="nav__item">
          <a href="#home" className="nav__link active" onClick={navToggle}>
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#sobre" className="nav__link" onClick={navToggle}>
            Sobre
          </a>
        </li>
        <li className="nav__item">
          <a href="#habilidades" className="nav__link" onClick={navToggle}>
            Habilidades
          </a>
        </li>
        <li className="nav__item">
          <a href="#projetos" className="nav__link" onClick={navToggle}>
            Projetos
          </a>
        </li>
        <li className="nav__item">
          <a href="#contato" className="nav__link" onClick={navToggle}>
            Contato
          </a>
        </li>
      </ul>
      <DarkMode theme={theme} setTheme={setTheme} options={options} />
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
