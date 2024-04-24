interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#060606] | px-3 py-2 rounded flex justify-center items-center gap-3"
    >
      {children}
    </button>
  );
}
