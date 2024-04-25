import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface InputProps {
  type: "text" | "password" | "number" | "email" | "date" | "textarea";
  name?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

export default function Input({
  type,
  name,
  placeholder,
  className,
  value,
  setValue,
}: InputProps) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (!setValue) return;
    setValue(e.currentTarget.value);
  };

  if (type === "textarea") {
    return (
      <textarea
        className={`${className} w-full p-3 rounded bg-[#060606] border border-[#3C3C3C]`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    );
  } else {
    return (
      <input
        className={`${className} w-full p-3 rounded bg-[#060606] border border-[#3C3C3C]`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    );
  }
}
