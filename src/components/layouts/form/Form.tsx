import { FormEvent, useState } from "react";
import { formValidade } from "@/services/validade";
import { emailService } from "@/services/emailService";
import Input from "../../common/input/Input";
import Button from "@/components/common/button/Button";

interface FormValidationError {
  name?: string;
  lastName?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormValidationError>({});

  const [sucess, setSucess] = useState("");
  const [failure, setFailure] = useState("");

  const classError = "text-red-600 text-sm py-1";

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = await formValidade({
      name,
      lastName,
      email,
      company,
      message,
    });

    if (result.result === false) {
      setSucess("");
      setErrors(result.content);
      return;
    }

    const response = await emailService(
      name,
      lastName,
      email,
      company,
      message
    );

    if (response.result) {
      clear();
      setSucess("Mensagem enviada com sucesso!");
      return;
    } else {
      setFailure("Erro ao enviar a mensagem");
      return;
    }
  };

  const clear = () => {
    setErrors({});

    setName("");
    setLastName("");
    setEmail("");
    setCompany("");
    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => formSubmit(e)}
      className="flex flex-col gap-5"
      id="contact"
    >
      <h5 className="text-center text-3xl font-semibold my-5">
        Entre em contato
      </h5>

      {sucess ? (
        <div className="bg-green-700 |  h-10 rounded | flex justify-center items-center">
          <p>{sucess}</p>
        </div>
      ) : (
        ""
      )}

      {failure ? (
        <div className="bg-red-500 |  h-10 rounded | flex justify-center items-center">
          <p>{failure}</p>
        </div>
      ) : (
        ""
      )}

      {/* NAME LINE CONTAINER */}
      <div className="flex gap-5 | container-name">
        <label className="w-full">
          <p className={classError}>{errors.name ? errors.name : ""}</p>
          <Input
            type="text"
            name="firstName"
            placeholder="Nome"
            value={name}
            setValue={setName}
          />
        </label>
        <label className="w-full">
          <p className={classError}>{errors.lastName ? errors.lastName : ""}</p>
          <Input
            type="text"
            name="lastName"
            placeholder="Sobrenome"
            value={lastName}
            setValue={setLastName}
          />
        </label>
      </div>

      {/* INFO ROWS */}
      <label>
        <p className={classError}>{errors.email ? errors.email : ""}</p>
        <Input
          type="email"
          name="email"
          placeholder="Seu email"
          value={email}
          setValue={setEmail}
        />
      </label>
      <label>
        <p className={classError}>{errors.company ? errors.company : ""}</p>
        <Input
          type="text"
          name="company"
          placeholder="Empresa"
          value={company}
          setValue={setCompany}
        />
      </label>
      <label>
        <p className={classError}>{errors.message ? errors.message : ""}</p>
        <Input
          type="textarea"
          name="message"
          placeholder="Digite a sua mensagem..."
          className="h-40"
          value={message}
          setValue={setMessage}
        />
        <span>
          <b
            className={
              message.length >= 1000
                ? "text-red-500 font-normal"
                : "font-normal"
            }
          >
            {message.length}
          </b>
          /1.000
        </span>
      </label>

      {/* BUTTON CONTAINER */}
      <div className="flex justify-center gap-10">
        <button type="reset" onClick={() => clear()}>
          Cancelar
        </button>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
