import { FormEvent, MouseEvent, useState } from "react";
import Image from "next/image";
import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./email.module.css";
import IEmailService from "@/services/IEmailService";
import { IValidateService } from "@/services/IValidateService";

interface EmailProps {
  emailService: IEmailService;
  validateService: IValidateService;
  className?: string;
}

export default function Email({
  className,
  emailService,
  validateService,
}: EmailProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ name, email, message });

    try {
      const response = await validateService.validate({ name, email, message });

      if (!response.result) {
        throw response.content;
      }

      await emailService.send({ from_name: name, from_email: email, message });

      alert("Enviado com sucesso!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      console.log(e);

      alert("Erro ao encaminhas a mensagem.");
    }
  };

  return (
    <form
      className={`${styles.container} ${className}`}
      method="post"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <h2 className={styles.title}>EMAIL</h2>
        <p className={styles.description}> ENTRE EM CONTATO</p>
      </div>

      <div className={styles.inputs}>
        <Input
          type="text"
          placeholder="Seu nome"
          value={name}
          setValue={setName}
        />
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="textarea"
          placeholder="Sua mensagem"
          value={message}
          setValue={setMessage}
        />

        <div className={styles.button}>
          <button onClick={(e) => handleCancel(e)}>Cancelar</button>
          <Button>Enviar</Button>
        </div>
      </div>

      <Image
        src={"/images/flower.png"}
        width={500}
        height={500}
        alt="a picture of a abstract flower"
        className={styles.flower}
      />

      <Image
        src={"/images/flower.png"}
        width={500}
        height={500}
        alt="a picture of a abstract flower"
        className={styles.flower2}
      />
    </form>
  );
}
