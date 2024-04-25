interface InputProps {
  type: "text" | "password" | "number" | "email" | "date" | "textarea";
  name?: string;
  placeholder?: string;
  className?: string;
}

export default function Input({
  type,
  name,
  placeholder,
  className,
}: InputProps) {
  if (type === "textarea") {
    return (
      <textarea
        className={`${className} w-full p-3 rounded bg-[#060606] border border-[#3C3C3C]`}
        name={name}
        placeholder={placeholder}
      />
    );
  } else {
    return (
      <input
        className={`${className} w-full p-3 rounded bg-[#060606] border border-[#3C3C3C]`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    );
  }
}
