import Button from "@/components/common/button/Button";
import Icon from "../../icons/Icon";

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
    <header
      className="flex gap-10 flex-col justify-center items-center | h-96 | main-header"
      id="header"
    >
      <div>
        {/* TITLE CONTENT */}
        <p>Hello world_</p>
        <h2 className="text-5xl font-semibold max-w-80">Lucas Montenegro</h2>
        <h3 className="font-thin">Desenvolvedor back-end</h3>

        {/* CONTAINER BUTTONS */}
        <div className="flex justify-between mt-3">
          <div className="flex gap-3">
            <Button
              onClick={() => openInNewTab("https://github.com/lukinhas563")}
            >
              <Icon name="github" color="#fff" width={20} />
            </Button>
            <Button
              onClick={() =>
                openInNewTab("https://linkedin.com/in/lucasmontenegro")
              }
            >
              <Icon name="linkedin" color="#fff" width={20} />
            </Button>
          </div>

          <Button onClick={() => downloadPdf()}>
            <Icon name="download" color="#fff" /> Download CV
          </Button>
        </div>
      </div>

      {/* DESCRIPTION CONTENT */}
      <p className="max-w-[40rem] text-center">
        Empolgado com a tecnologia e sua capacidade de transformar experiências
        digitais, sou um profissional em Desenvolvimento <b>Back-end</b>.
        Comprometido com a excelência, possuo habilidade em <b>C#</b>,{" "}
        <b>Typescript</b>, <b>Java</b> e outras tecnologias relevantes.
      </p>
    </header>
  );
}
