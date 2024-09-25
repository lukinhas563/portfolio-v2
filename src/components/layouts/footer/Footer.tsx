import Logo from "@/components/common/logo/Logo";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className=" flex flex-col h-80 justify-center items-center">
      <p>Criado com ♥️ por</p>
      <Logo />
      <ul className="flex flex-row gap-4 mt-4 justify-center items-center">
        <li>
          <a href="#menu" className={styles.option}>
            Inicio
          </a>
        </li>
        <div className={styles.verticalLine} />
        <li>
          <a href="#about" className={styles.option}>
            Sobre
          </a>
        </li>
        <div className={styles.verticalLine} />
        <li>
          <a href="#projects" className={styles.option}>
            Projetos
          </a>
        </li>
        <div className={styles.verticalLine} />
        <li>
          <a href="#contact" className={styles.option}>
            Contato
          </a>
        </li>
      </ul>
    </footer>
  );
}
