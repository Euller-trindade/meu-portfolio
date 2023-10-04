import React, { useState } from "react";
import "./contato.css";
import emailjs from "@emailjs/browser";
import { BiSolidSend } from "react-icons/bi";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos!");
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_x3384wa",
        "template_ksrd32d",
        templateParams,
        "8zJWbz8mOxxyMn2wi"
      )
      .then(
        (response) => {
          alert("Email enviado com sucesso.");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Erro:", error);
        }
      );
  };
  return (
    <div className="container__contato">
      <section>
        <form className="form" onSubmit={sendEmail}>
          <div className="nome__email">
            <div className="nome">
              <label id="name">Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete="off"
              />
            </div>
            <div className="email">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="mensagem">
            <label>Mensagem</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Digite sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <button type="submit">
            Enviar <BiSolidSend />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contato;
