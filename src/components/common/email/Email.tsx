import { FormEvent, MouseEvent, useState } from "react";
import Image from "next/image";
import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./email.module.css";
import IEmailService from "@/services/IEmailService";
import { ValidateErrorResult } from "@/services/IValidateService";
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

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await validateService.validate({ name, email, message });

      await emailService.send({ from_name: name, from_email: email, message });

      alert("Enviado com sucesso!");

      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (e) {
      if (e instanceof ValidateErrorResult) {
        setErrors(e.content);

        console.log(errors);
      } else {
        console.error(e);

        setErrors({ general: "Erro ao encaminhar a mensagem" });
      }
    }
  };

  return (
    <form
      className={`${styles.container} ${className}`}
      method="post"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>EMAIL</h2>
          <p className={styles.description}> ENTRE EM CONTATO</p>
        </div>
        <ul>
          {Object.values(errors).map((error, index) => (
            <li key={index} className={styles.error}>
              {error} *
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.inputs}>
        <Input
          type="text"
          placeholder="Seu nome"
          value={name}
          setValue={setName}
          className={errors.name ? styles.inputError : ""}
        />
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          setValue={setEmail}
          className={errors.email ? styles.inputError : ""}
        />
        <Input
          type="textarea"
          placeholder="Sua mensagem"
          value={message}
          setValue={setMessage}
          className={errors.message ? styles.inputError : ""}
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
