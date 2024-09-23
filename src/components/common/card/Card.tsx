import Icon from "@/components/icons/Icon";
import { icons } from "@/components/icons/icons";

interface CardProps {
  iconName: keyof typeof icons;
  title: string;
  content: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Card({ iconName, title, content, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1A1A1A] | flex flex-col justify-end gap-3 | border border-[#3C3C3C] w-60 h-80 rounded p-5 cursor-pointer min-w-60 | card"
    >
      <Icon name={iconName} color="#fff" />
      <p className="flex gap-3 items-center">
        {title}
        <Icon name="arrowupright" color="#fff" />
      </p>
      <p className="font-light text-sm">{content}</p>
    </div>
  );
}
