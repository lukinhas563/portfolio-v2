import { icons } from "@/components/icons/icons";
import Icon from "@/components/icons/Icon";
import styles from "./project.module.css";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  frameworks: (keyof typeof icons)[];
  link: string;
}

export default function Project({
  title,
  description,
  frameworks,
  link,
}: ProjectProps) {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div className={styles.container}>
      <Image
        src={"/images/grid.png"}
        width={340}
        height={340}
        alt="a picture of a grid"
        className={styles.grid}
      />
      <h3 className={styles.title}>{title.toUpperCase()}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.info}>
        <ul className={styles.frameworks}>
          {frameworks.map((framework) => (
            <li key={framework}>
              <Icon name={framework} className={styles.icon} width={30} />
            </li>
          ))}
        </ul>
        <button className={styles.link} onClick={() => openInNewTab(link)}>
          Veja mais <Icon name="halfarrowup" />
        </button>
      </div>
    </div>
  );
}
