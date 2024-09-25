import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <section role="contentinfo" className={styles.section} id="about">
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Sobre mim</h2>
          <h3 className={styles.subtitle}>
            Meu nome é <span className={styles.name}>Lucas Montenegro</span>,
            desenvolvedor Back-end.
          </h3>
        </div>

        <p className={styles.content}>
          Apaixonado por tecnologia e otimização de sistemas, sou um
          profissional especializado em <b>Desenvolvimento Back-end</b>. Com
          experiência em <b>C#</b>, <b>ASP.NET</b>, <b>Python</b>,{" "}
          <b>Typescript</b> e arquitetura de <b>micro serviços</b>, estou
          comprometido em criar soluções robustas e escaláveis para transformar
          negócios e experiências digitais.
        </p>

        <Image
          src={"/images/flower.png"}
          width={500}
          height={500}
          alt="a picture of a abstract flower"
          className={styles.flower}
        />

        <Image
          src={"/images/flower.png"}
          width={500}
          height={500}
          alt="a picture of a abstract flower2"
          className={styles.flower2}
        />
      </div>
    </section>
  );
}
