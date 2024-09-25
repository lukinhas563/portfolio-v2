import Logo from "@/components/common/logo/Logo";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu} id="menu">
      <Logo className={styles.logomenu} />

      <ul className={styles.options}>
        <li>
          <a className={styles.option} href="#header">
            Inicio
          </a>
        </li>
        <div className={styles.verticalLine} />
        <li>
          <a className={styles.option} href="#about">
            Sobre
          </a>
        </li>
        <div className={styles.verticalLine} />
        <li>
          <a className={styles.option} href="#projects">
            Projetos
          </a>
        </li>
        <div className={styles.verticalLine} />
        <li>
          <a className={styles.option} href="#contact">
            Contato
          </a>
        </li>
      </ul>

      <div className={styles.doggle}>OI</div>
    </nav>
  );
}
