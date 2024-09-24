import styles from "./logo.module.css";

interface LogoProps {
  className?: string;
}
export default function Logo({ className }: LogoProps) {
  return (
    <h1 className={`${styles.logo} ${className}`}>
      <span className={styles.firstname}>LUCAS</span>{" "}
      <span className={styles.lastname}>MONTENEGRO</span>
    </h1>
  );
}
