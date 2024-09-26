import Logo from "@/components/common/logo/Logo";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer
      className={`${styles.container} flex flex-col h-80 justify-center items-center`}
    >
      <p>Criado com ♥️ por</p>
      <Logo />
      <ul className="flex flex-row mt-4 justify-center items-center">
        <li className={styles.option}>
          <a href="#menu">Inicio</a>
        </li>
        <li className={styles.option}>
          <a href="#about">Sobre</a>
        </li>
        <li className={styles.option}>
          <a href="#projects">Projetos</a>
        </li>
        <li className={styles.option}>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </footer>
  );
}
