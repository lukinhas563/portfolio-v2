import Card from "../card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Section() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      partialVisibilityGutter: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1300, min: 1034 },
      items: 4,
      partialVisibilityGutter: 10,
    },
    smallTablet: {
      breakpoint: { max: 1034, min: 840 },
      items: 3,
      partialVisibilityGutter: 10,
    },
    largeMobile: {
      breakpoint: { max: 840, min: 630 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 630, min: 344 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    smallMobile: {
      breakpoint: { max: 344, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <section className="flex flex-col gap-10 px-10 py-10" id="projects">
      <h4 className="text-center text-3xl font-semibold my-4">
        Conheça meus projetos
      </h4>

      {/* SLIDE CONTAINER */}
      <Carousel
        className="custom-carousel"
        ssr={true}
        responsive={responsive}
        partialVisbile={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <Card
          iconName="server"
          title="MICRO SERVIÇOS HQ"
          content="Back-end C# em arquitetura de micro-serviços com Docker compose e PostgreSQL."
          onClick={() => openInNewTab("https://github.com/lukinhas563/Lidas")}
        />
        <Card
          iconName="server"
          title="API TYPESCRIPT"
          content="Uma API REST desenvolvida utilizando Typescript e Express com banco de dados MySQL."
          onClick={() =>
            openInNewTab("https://github.com/lukinhas563/e-ficaz-api")
          }
        />
        <Card
          iconName="computer"
          title="PORTFOLIO FRONT"
          content="Portfolio desenvolvida em Next e Typescript permitindo alta-perfomace."
          onClick={() =>
            openInNewTab("https://github.com/lukinhas563/portfolio-v2")
          }
        />
        <Card
          iconName="computer"
          title="BLOG STRAPI"
          content="Blog desenvolvida em Next utilizando a tecnologia Strap como back-end."
          onClick={() =>
            openInNewTab("https://github.com/lukinhas563/blog-strapi-test")
          }
        />
        <Card
          iconName="computer"
          title="NOTAS FISCAIS"
          content="Calculadora de notas fiscais eletrônicas desenvolvida em React com conceitos do SOLID."
          onClick={() =>
            openInNewTab("https://github.com/lukinhas563/xmlcalc2")
          }
        />
        <Card
          iconName="computer"
          title="LANDING PAGE"
          content="Landing Page utlizando apenas HTML e CSS. Foi desenvolvida com o objetivo de entender os fundamentos básicos."
          onClick={() =>
            openInNewTab("https://github.com/lukinhas563/basic-landing-page")
          }
        />
      </Carousel>
    </section>
  );
}
