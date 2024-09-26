import Logo from "@/components/common/logo/Logo";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu} id="menu">
      <Logo className={styles.logomenu} />

      <ul className={styles.options}>
        <li className={styles.option}>
          <a href="#header">Inicio</a>
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

      <div className={styles.doggle}>OI</div>
    </nav>
  );
}
