import Button from "../button/Button";
import Icon from "../icons/Icon";

export default function Header() {
  return (
    <header className="flex gap-10 flex-col justify-center items-center | h-96">
      <div>
        {/* TITLE CONTENT */}
        <p>Hello world_</p>
        <h2 className="text-5xl font-semibold max-w-80">Lucas Montenegro</h2>
        <h3 className="font-thin">Desenvolvedor front-end</h3>

        {/* CONTAINER BUTTONS */}
        <div className="flex justify-between mt-3">
          <div className="flex gap-3">
            <Button>
              <Icon name="github" color="#fff" width={20} />
            </Button>
            <Button>
              <Icon name="linkedin" color="#fff" width={20} />
            </Button>
          </div>

          <Button>
            <Icon name="download" color="#fff" /> Download CV
          </Button>
        </div>
      </div>

      {/* DESCRIPTION CONTENT */}
      <p className="max-w-[40rem] text-center">
        Empolgado com a tecnologia e sua capacidade de transformar experiências
        digitais, sou um profissional em Desenvolvimento <b>Front-end</b>.
        Comprometido com a excelência, possuo habilidade em <b>React</b>,{" "}
        <b>Typescript</b>, <b>Next</b> e outras tecnologias relevantes.
      </p>
    </header>
  );
}