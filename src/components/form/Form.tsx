import { FormEvent, useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";

export default function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(name, lastName, email, company, message);
  };
  return (
    <form
      onSubmit={(e) => formSubmit(e)}
      className="flex flex-col gap-5 w-4/6 "
    >
      <h5 className="text-center text-3xl font-semibold my-5">
        Entre em contato
      </h5>

      {/* NAME LINE CONTAINER */}
      <div className=" flex gap-5">
        <Input
          type="text"
          name="firstName"
          placeholder="Nome"
          value={name}
          setValue={setName}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          value={lastName}
          setValue={setLastName}
        />
      </div>

      {/* INFO ROWS */}
      <Input
        type="email"
        name="email"
        placeholder="Seu email"
        value={email}
        setValue={setEmail}
      />
      <Input
        type="text"
        name="company"
        placeholder="Empresa"
        value={company}
        setValue={setCompany}
      />
      <Input
        type="textarea"
        name="message"
        placeholder="Digite a sua mensagem..."
        className="h-40"
        value={message}
        setValue={setMessage}
      />

      {/* BUTTON CONTAINER */}
      <div className="flex justify-center gap-10">
        <button>Cancelar</button>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
