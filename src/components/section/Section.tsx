import { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import Card from "../card/Card";
import Icon from "../icons/Icon";

export default function Section() {
  const [cards, setCards] = useState<NodeList | never[]>([]);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const cardsComponents = document.querySelectorAll(".card");

    setCards(cardsComponents);
  }, []);

  if (cards[currentCard]) {
    (cards[currentCard] as HTMLElement).scrollIntoView({
      inline: "start",
      block: "nearest",
      behavior: "smooth",
    });
  }

  const handleRightClick = () => {
    if (currentCard > cards.length - 2) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentCard <= 0) {
      setCurrentCard(cards.length - 1);
    } else {
      setCurrentCard(currentCard - 1);
    }
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <section className="flex flex-col gap-10 ">
      <h4 className="text-center text-3xl font-semibold my-4">
        Conheça meus projetos
      </h4>
      {/* SLIDE CONTAINER */}
      <div className="flex flex-row gap-10 overflow-x-auto no-scrollbar">
        <Card
          iconName="server"
          title="API TYPESCRIPT"
          content="Lorem ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren"
          onClick={() =>
            openInNewTab("https://github.com/lukinhas563/e-ficaz-api")
          }
        />
        <Card
          iconName="computer"
          title="PORTFOLIO FRONT"
          content="Lorem ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren"
          onClick={() =>
            openInNewTab("https://github.com/lukinhas563/portfolio-v2")
          }
        />
        <Card
          iconName="computer"
          title="BLOG STRAPI"
          content="Lorem ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren"
          onClick={() =>
            openInNewTab("https://github.com/lukinhas563/blog-strapi-test")
          }
        />
        <Card
          iconName="computer"
          title="NOTAS FISCAIS"
          content="Lorem ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren"
          onClick={() =>
            openInNewTab("https://github.com/lukinhas563/xmlcalc2")
          }
        />
        <Card
          iconName="computer"
          title="LANDING PAGE"
          content="Lorem ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren"
          onClick={() =>
            openInNewTab("https://github.com/lukinhas563/basic-landing-page")
          }
        />
      </div>

      {/* BUTTON CONTAINER */}
      <div className="flex flex-row gap-3 justify-end">
        <Button onClick={() => handleLeftClick()}>
          <Icon name="arrowleft" color="#fff" />
        </Button>
        <Button onClick={() => handleRightClick()}>
          <Icon name="arrowright" color="#fff" />
        </Button>
      </div>
    </section>
  );
}
