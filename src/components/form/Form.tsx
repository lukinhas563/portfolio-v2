import Button from "../button/Button";
import Input from "../input/Input";

export default function Form() {
  return (
    <form className="flex flex-col gap-5 w-4/6 ">
      <h5 className="text-center text-3xl font-semibold my-5">
        Entre em contato
      </h5>
      <div className=" flex gap-5">
        <Input type="text" name="firstName" placeholder="Nome" />
        <Input type="text" name="lastName" placeholder="Sobrenome" />
      </div>

      <Input type="email" name="email" placeholder="Seu email" />
      <Input type="text" name="company" placeholder="Empresa" />
      <Input
        type="textarea"
        name="message"
        placeholder="Digite a sua mensagem..."
        className="h-40"
      />
      <div className="flex justify-center gap-10">
        <button>Cancelar</button>
        <Button>Enviar</Button>
      </div>
    </form>
  );
}
