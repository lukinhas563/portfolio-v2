import Logo from "@/components/common/logo/Logo";
import Menu from "../menu/Menu";

export default function Footer() {
  return (
    <footer className=" flex flex-col h-80 justify-center items-center">
      <p>Criado com ♥️ por</p>
      <Logo />
      <ul className="flex flex-row gap-4 mt-4">
        <li>Inicio</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
    </footer>
  );
}
