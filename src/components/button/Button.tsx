interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#060606] | px-3 py-2 rounded flex justify-center items-center gap-3"
    >
      {children}
    </button>
  );
}
