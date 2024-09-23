import { icons } from "./icons";

interface IconProps {
  name: keyof typeof icons;
  width?: number;
  color?: string;
  className?: string;
}

export default function Icon({
  name,
  width = 20,
  color = "#fff",
  className,
}: IconProps) {
  const Component = icons[name];

  return <Component width={width} color={color} className={className} />;
}
