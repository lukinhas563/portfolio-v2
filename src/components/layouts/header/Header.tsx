import Icon from "@/components/icons/Icon";
import Button from "@/components/common/button/Button";
import { motion } from "framer-motion";
import styles from "./header.module.css";

export default function Header() {
  const starVariants = (delay: number) => ({
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0, 1, 0.8],
      transition: { duration: 1.5, ease: "easeInOut", delay },
    },
  });

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const downloadPdf = () => {
    const aTag = document.createElement("a");
    aTag.href = "documents/Lucas Montenegro - Desenvolvedor Back End.pdf";
    aTag.setAttribute("download", "Lucas_Montenegro_Alves.pdf");
    aTag.click();
    aTag.remove();
  };

  const socials = {
    gitHub: "https://github.com/lukinhas563",
    linkdIn: "https://www.linkedin.com/in/lucasmontenegro",
  };

  return (
    <header className={styles.header} id="header">
      <motion.div
        variants={starVariants(0)}
        initial="initial"
        animate="animate"
        className="absolute right-60 bottom-28 "
      >
        <Icon name="star" width={80} className="rotate-12" />
      </motion.div>

      <motion.div
        variants={starVariants(0.3)}
        initial="initial"
        animate="animate"
        className="absolute right-28 top-28 "
      >
        <Icon name="star" width={30} className="rotate-45" />
      </motion.div>

      <motion.div
        variants={starVariants(0.6)}
        initial="initial"
        animate="animate"
        className="absolute left-28 top-14"
      >
        <Icon name="shootingstar" width={80} />
      </motion.div>

      <motion.div
        variants={starVariants(0.9)}
        initial="initial"
        animate="animate"
        className="absolute left-80 bottom-32"
      >
        <Icon name="light" width={38} />
      </motion.div>

      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Experiências digitais incríveis começam com um backend sólido.
        </h2>
        <h3 className={styles.subtitle}>
          Contrate um desenvolvedor back-end profissional.
        </h3>

        <div className={styles.action}>
          <div className={styles.links}>
            <button onClick={() => openInNewTab(socials.gitHub)}>
              <Icon name="github" width={30} />
            </button>
            <button onClick={() => openInNewTab(socials.linkdIn)}>
              <Icon name="linkedin" width={30} />
            </button>
          </div>
          <Button onClick={() => downloadPdf()}>Baixar CV</Button>
        </div>
      </div>
    </header>
  );
}
