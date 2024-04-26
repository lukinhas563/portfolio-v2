import Icon from "../icons/Icon";

export default function NavBar() {
  return (
    <nav
      className="flex justify-between items-center h-16 border-b-2 border-[#3C3C3C] px-20 | main-nav"
      id="nav-bar"
    >
      <h1 className="flex gap-3 items-center | main-title">
        <Icon name="email" color="#fff" /> lucasmontenegro475@gmail.com
      </h1>

      <ul className="flex gap-10">
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
