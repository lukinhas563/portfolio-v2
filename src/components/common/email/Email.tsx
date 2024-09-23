import Image from "next/image";
import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./email.module.css";

export default function Email() {
  return (
    <form className={styles.container} method="post">
      <div>
        <h2 className={styles.title}>EMAIL</h2>
        <p className={styles.description}> ENTRE EM CONTATO</p>
      </div>

      <div className={styles.inputs}>
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="E-mail" />
        <Input type="textarea" placeholder="Mensagem" />

        <div className={styles.button}>
          <button>Cancelar</button>
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
