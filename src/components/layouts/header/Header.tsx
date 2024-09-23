import Icon from "@/components/icons/Icon";
import styles from "./header.module.css";
import Button from "@/components/common/button/Button";

export default function Header() {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const downloadPdf = () => {
    const aTag = document.createElement("a");
    aTag.href = "/Lucas Montenegro - Desenvolvedor Back End.pdf";
    aTag.setAttribute("download", "Lucas_Montenegro_Alves.pdf");
    aTag.click();
    aTag.remove();
  };

  return (
    <header className={styles.header} id="header">
      <Icon
        name="star"
        width={80}
        className="absolute right-60 bottom-28 rotate-12"
      />
      <Icon
        name="star"
        width={30}
        className="absolute right-28 top-28 rotate-45"
      />
      <Icon
        name="shootingstar"
        width={80}
        className="absolute left-28 top-14"
      />
      <Icon name="light" width={38} className="absolute left-80 bottom-32" />

      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Experiências digitais incríveis começam com um backend sólido.
        </h2>
        <h3 className={styles.subtitle}>
          Contrate um desenvolvedor back-end profissional.
        </h3>

        <div className={styles.action}>
          <div className={styles.links}>
            <Icon name="github" width={30} />
            <Icon name="linkedin" width={30} />
          </div>
          <Button>Baixar CV</Button>
        </div>
      </div>
    </header>
  );
}
