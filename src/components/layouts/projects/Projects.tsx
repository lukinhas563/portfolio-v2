import Project from "@/components/common/project/Project";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <section role="contentinfo" className={styles.container} id="projects">
      <h2 className={styles.title}>PROJETOS RECENTES</h2>

      <div role="grid" className={styles.grid}>
        <Project
          title="MICRO SERVIÇOS HQ"
          description="Back-end C# em arquitetura de micro-serviços com Docker compose e PostgreSQL."
          frameworks={["csharp", "docker", "postgresql"]}
          link="https://github.com/lukinhas563/Lidas"
        />
        <Project
          title="API TYPESCRIPT"
          description="Uma API REST desenvolvida utilizando Typescript e Express com banco de dados MySQL."
          frameworks={["typescript", "node", "mysql"]}
          link="https://github.com/lukinhas563/e-ficaz-api"
        />
        <Project
          title="PORTFOLIO FRONT-END"
          description="Portfolio desenvolvida em Next e Typescript permitindo alta-perfomace."
          frameworks={["typescript", "css", "tailwind", "next"]}
          link="https://github.com/lukinhas563/portfolio-v2"
        />
        <Project
          title="TRENDING TOPICS"
          description="Sistema de trending topics consuindo a API da Bluesky utilizando Python e o AT Protocol."
          frameworks={["python"]}
          link="https://github.com/lukinhas563/bsky-trendingtopics"
        />
        <Project
          title="BLOG STRAPI"
          description="Blog desenvolvida em Next utilizando a tecnologia Strap como back-end."
          frameworks={["typescript", "css", "next"]}
          link="https://github.com/lukinhas563/blog-strapi-test"
        />
        <Project
          title="NOTAS FISCAIS"
          description="Calculadora de notas fiscais eletrônicas desenvolvida em React com conceitos do SOLID."
          frameworks={["typescript", "css", "tailwind", "react"]}
          link="https://github.com/lukinhas563/xmlcalc2"
        />
        <Project
          title="LANDING PAGE"
          description="Landing Page utlizando apenas HTML e CSS. Foi desenvolvida com o objetivo de entender os fundamentos básicos."
          frameworks={["html", "css"]}
          link="https://github.com/lukinhas563/basic-landing-page"
        />
      </div>
    </section>
  );
}
