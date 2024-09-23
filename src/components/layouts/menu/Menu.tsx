import Logo from "@/components/common/logo/Logo";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Logo />

      <ul className={styles.options}>
        <li>Inicio</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>

      <div className={styles.doggle}>OI</div>
    </nav>
  );
}
