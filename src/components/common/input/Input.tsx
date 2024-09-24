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
        className={`${className} w-full h-40 p-3 rounded bg-white border border-[#3C3C3C] text-black`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    );
  } else {
    return (
      <input
        className={`${className} w-full p-3 rounded bg-white border border-[#3C3C3C] text-black`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    );
  }
}
