import Icon from "../icons/Icon";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center h-16 border-b-2 border-[#3C3C3C] px-20">
      <h1 className="flex gap-3 items-center">
        <Icon name="email" color="#fff" /> lucasmontenegro475@gmail.com
      </h1>

      <ul className="flex gap-10">
        <li>Projetos</li>
        <li>Habilidades</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}
