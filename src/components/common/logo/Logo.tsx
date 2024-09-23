import styles from "./logo.module.css";

export default function Logo() {
  return (
    <h1 className={styles.logo}>
      <span className={styles.firstname}>LUCAS</span>{" "}
      <span className={styles.lastname}>MONTENEGRO</span>
    </h1>
  );
}
