import styles from "./button.module.css";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  className,
  children,
  type,
  onClick,
}: ButtonProps) {
  return (
    <div className={styles.wrapper}>
      <button type={type} onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
}
