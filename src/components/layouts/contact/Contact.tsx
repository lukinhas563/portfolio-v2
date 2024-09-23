import Icon from "@/components/icons/Icon";
import styles from "./contact.module.css";
import Email from "@/components/common/email/Email";

export default function Contact() {
  return (
    <section className={styles.container}>
      <div className="absolute bg-[#2D235C] h-[50rem] w-[50rem] left-[-30rem] top-[-20rem] rounded-full blur-3xl" />
      <Icon
        name="light"
        className="absolute top-[100px] left-[3px] rotate-12"
      />

      <div className={styles.info}>
        <div>
          <h2 className={styles.title}>Vamos conversar?</h2>
          <p className={styles.description}>
            Estou sempre aberto a novas oportunidades, colaborações ou apenas um
            bate-papo sobre tecnologia. Sinta-se à vontade para me enviar uma
            mensagem!
          </p>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Icon name="email" /> lucasmontenegro475@gmail.com
          </li>
          <li className={styles.item}>
            <Icon name="linkedin" /> linkedin.com/in/lucasmontenegro
          </li>
          <li className={styles.item}>
            <Icon name="github" /> github.com/lukinhas563
          </li>
        </ul>
      </div>

      <Email />
    </section>
  );
}
